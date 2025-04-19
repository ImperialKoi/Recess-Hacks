import { GitHub, Google } from "arctic";

export const github = new GitHub(
    process.env.GITHUB_CLIENT_ID ?? "",
    process.env.GITHUB_CLIENT_SECRET ?? "",
    process.env.DEV === "true" ? "http://localhost:3000/login/github/callback" : "https://recesshacks.org/login/github/callback"
);

export const google = new Google(
    process.env.GOOGLE_CLIENT_ID ?? "",
    process.env.GOOGLE_CLIENT_SECRET ?? "",
    process.env.DEV === "true" ? "http://localhost:3000/login/google/callback" : "https://recesshacks.org/login/google/callback"
);
