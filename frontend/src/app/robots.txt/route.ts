import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const content = `
User-agent: *
Disallow: /api/
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
