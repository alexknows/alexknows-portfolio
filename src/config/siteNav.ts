export interface NavItem {
  to: string;
  label: string;
  exact?: boolean;
  matchPrefixes?: string[];
}

export const siteNav: NavItem[] = [
  { to: "/", label: "Home", exact: true },
  {
    to: "/ecommerce",
    label: "E-commerce",
    matchPrefixes: ["/ecommerce", "/commerce"],
  },
  { to: "/poker", label: "Poker" },
  {
    to: "/past-projects/ios",
    label: "Past projects",
    matchPrefixes: [
      "/past-projects",
      "/work",
      "/ios",
      "/android",
      "/web",
      "/ai",
      "/tools",
    ],
  },
  {
    to: "/notes",
    label: "Notes",
    matchPrefixes: ["/notes", "/posts"],
  },
];
