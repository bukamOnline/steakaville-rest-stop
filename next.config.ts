import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.NEXT_OUTPUT_EXPORT === "true";
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      ...(githubBasePath
        ? { basePath: githubBasePath, assetPrefix: githubBasePath }
        : {}),
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { ignoreBuildErrors: true },
    }
  : {};

export default nextConfig;
