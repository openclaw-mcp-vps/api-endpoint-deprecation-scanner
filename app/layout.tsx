import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Deprecation Scanner – Monitor Breaking Changes Across Dependencies",
  description: "Scan your package.json dependencies for API deprecation notices and breaking changes across GitHub, docs, and changelogs. Get alerted before upgrades break your app."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d17b8861-f58c-4d59-b0a6-49955e81cdc6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
