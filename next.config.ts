import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.NEXT_OUTPUT_EXPORT === "true";
const githubBasePath = "/steakaville-rest-stop";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      basePath: githubBasePath,
      assetPrefix: githubBasePath,
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { ignoreBuildErrors: true },
    }
  : {};

export default nextConfig;
