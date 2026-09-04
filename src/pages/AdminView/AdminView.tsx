import React, { useState } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Link,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useAuth } from "../../context/AuthContext";
import { usePosts } from "../../context/PostsContext";
import {
  BlogPost,
  NoteTrack,
  noteTrackLabels,
  slugify,
  getPostTrack,
} from "../../config/blogPostsData";

const tracks: NoteTrack[] = ["commerce", "poker", "startups", "engineering"];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    background: "#fff",
  },
  bar: {
    background: "#000",
    color: "#fff",
    padding: theme.spacing(2, 3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barLink: {
    color: "#fff",
    fontSize: 14,
    marginRight: theme.spacing(2),
  },
  body: {
    padding: theme.spacing(5, 0, 8, 0),
  },
  login: {
    maxWidth: 360,
    margin: "20vh auto 0",
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: theme.spacing(3),
  },
  note: {
    padding: theme.spacing(2, 0),
    borderBottom: "1px solid #eee",
  },
  actions: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  error: {
    color: "#b00020",
    marginBottom: theme.spacing(2),
  },
  contentField: {
    "& textarea": {
      minHeight: 360,
      fontFamily: "Helvetica, Roboto, sans-serif",
      fontSize: 15,
      lineHeight: 1.6,
    },
  },
}));

const formatToday = () =>
  new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const emptyPost = (): BlogPost => ({
  id: "",
  date: formatToday(),
  title: "",
  excerpt: "",
  url: "",
  content: "",
  track: "startups",
});

const AdminView = () => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const { isAuthed, login, logout } = useAuth();
  const { posts, savePosts } = usePosts();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const editMatch = pathname.match(/^\/admin\/edit\/(.+)$/);
  const isNew = pathname === "/admin/new";
  const editingId = editMatch ? decodeURIComponent(editMatch[1]) : "";

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      await login(password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wrong password");
    }
  };

  if (!isAuthed) {
    return (
      <div className={classes.root}>
        <div className={classes.bar}>
          <Typography variant="h1" style={{ color: "#fff" }}>
            Content
          </Typography>
        </div>
        <Container maxWidth="sm">
          <form className={classes.login} onSubmit={onLogin}>
            <Typography variant="body1" className={classes.field}>
              Private editor for notes. Only you.
            </Typography>
            {error && (
              <Typography variant="body2" className={classes.error}>
                {error}
              </Typography>
            )}
            <TextField
              className={classes.field}
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              autoFocus
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Log in
            </Button>
          </form>
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <div>
          <Link
            component={RouterLink}
            to="/admin"
            className={classes.barLink}
            underline="none"
          >
            Notes
          </Link>
          <Link href="/" className={classes.barLink} underline="none">
            View site
          </Link>
        </div>
        <Link
          component="button"
          className={classes.barLink}
          underline="none"
          onClick={() => {
            logout();
            history.push("/admin");
          }}
        >
          Log out
        </Link>
      </div>
      <Container maxWidth="md" className={classes.body}>
        {isNew || editingId ? (
          <Editor
            posts={posts}
            editingId={editingId}
            saving={saving}
            setSaving={setSaving}
            setError={setError}
            error={error}
            savePosts={savePosts}
          />
        ) : (
          <List posts={posts} />
        )}
      </Container>
    </div>
  );
};

const List = ({ posts }: { posts: BlogPost[] }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.row}>
        <Typography variant="h1">Notes</Typography>
        <Button
          component={RouterLink}
          to="/admin/new"
          variant="contained"
          color="primary"
          size="small"
        >
          New note
        </Button>
      </div>
      {posts.map((post) => (
        <div key={post.id || post.title} className={classes.note}>
          <Typography variant="body2" color="textSecondary">
            {post.date} · {noteTrackLabels[getPostTrack(post)]}
          </Typography>
          <Typography variant="h1">
            <Link
              component={RouterLink}
              to={`/admin/edit/${encodeURIComponent(post.id || "")}`}
              color="primary"
              underline="hover"
            >
              {post.title || "Untitled"}
            </Link>
          </Typography>
        </div>
      ))}
    </>
  );
};

interface EditorProps {
  posts: BlogPost[];
  editingId: string;
  saving: boolean;
  error: string;
  setSaving: (value: boolean) => void;
  setError: (value: string) => void;
  savePosts: (posts: BlogPost[]) => Promise<void>;
}

const Editor = ({
  posts,
  editingId,
  saving,
  error,
  setSaving,
  setError,
  savePosts,
}: EditorProps) => {
  const classes = useStyles();
  const history = useHistory();
  const existing = posts.find((post) => post.id === editingId);
  const [draft, setDraft] = useState<BlogPost>(
    existing ? { ...existing } : emptyPost()
  );

  const setField = (field: keyof BlogPost, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const persist = async (next: BlogPost[]) => {
    setSaving(true);
    setError("");
    try {
      await savePosts(next);
      history.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save");
    } finally {
      setSaving(false);
    }
  };

  const onSave = (event: React.FormEvent) => {
    event.preventDefault();
    const id = draft.id || slugify(draft.title);
    const nextPost: BlogPost = { ...draft, id };
    if (existing) {
      persist(posts.map((post) => (post.id === existing.id ? nextPost : post)));
      return;
    }
    persist([nextPost, ...posts]);
  };

  const onDelete = () => {
    if (!existing) {
      history.push("/admin");
      return;
    }
    if (!window.confirm("Delete this note?")) {
      return;
    }
    persist(posts.filter((post) => post.id !== existing.id));
  };

  return (
    <form onSubmit={onSave}>
      <Typography variant="h1" className={classes.field}>
        {existing ? "Edit note" : "New note"}
      </Typography>
      {error && (
        <Typography variant="body2" className={classes.error}>
          {error}
        </Typography>
      )}
      <TextField
        className={classes.field}
        label="Title"
        value={draft.title}
        onChange={(event) => setField("title", event.target.value)}
        fullWidth
        required
      />
      <TextField
        className={classes.field}
        label="Date"
        value={draft.date}
        onChange={(event) => setField("date", event.target.value)}
        fullWidth
      />
      <TextField
        className={classes.field}
        label="Track"
        value={draft.track || "startups"}
        onChange={(event) => setField("track", event.target.value)}
        select
        fullWidth
      >
        {tracks.map((track) => (
          <MenuItem key={track} value={track}>
            {noteTrackLabels[track]}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className={classes.field}
        label="Excerpt"
        value={draft.excerpt}
        onChange={(event) => setField("excerpt", event.target.value)}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        className={`${classes.field} ${classes.contentField}`}
        label="Body"
        value={draft.content}
        onChange={(event) => setField("content", event.target.value)}
        fullWidth
        multiline
        required
      />
      <div className={classes.actions}>
        <Button type="submit" variant="contained" color="primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
        {existing && (
          <Button onClick={onDelete} disabled={saving}>
            Delete
          </Button>
        )}
        <Button component={RouterLink} to="/admin">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AdminView;
