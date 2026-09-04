import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import AppConfig from "../config/AppConfiguration";
import { BlogPost, ensurePostId } from "../config/blogPostsData";
import { useAuth } from "./AuthContext";

interface PostsContextValue {
  posts: BlogPost[];
  savePosts: (posts: BlogPost[]) => Promise<void>;
}

const PostsContext = createContext<PostsContextValue | null>(null);

const seedPosts = (AppConfig.blogPosts || []).map(ensurePostId);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const { adminPassword } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>(seedPosts);

  useEffect(() => {
    fetch(`/content/posts.json?t=${Date.now()}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setPosts(data.map(ensurePostId));
        }
      })
      .catch(() => undefined);
  }, []);

  const value = useMemo<PostsContextValue>(
    () => ({
      posts,
      savePosts: async (nextPosts: BlogPost[]) => {
        const normalized = nextPosts.map(ensurePostId);
        const response = await fetch("/api/admin/posts", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-admin-password": adminPassword,
          },
          body: JSON.stringify({ posts: normalized }),
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(data.error || "Could not save");
        }
        setPosts(normalized);
      },
    }),
    [adminPassword, posts]
  );

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within PostsProvider");
  }
  return context;
};
