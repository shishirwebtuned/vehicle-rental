import { getAllVehicles } from "@/seo/getAllVehicles";
import { NextResponse } from "next/server";

export async function GET() {
  const vehicles = await getAllVehicles();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const urls = vehicles.map((vehicle) => {
    const slug = `${vehicle.name}-${vehicle.vehicleModel}-${vehicle._id}`;
    return `
      <url>
        <loc>${baseUrl}/our-cars/${slug}</loc>
        <lastmod>${new Date(
          vehicle.updatedAt || vehicle.createdAt
        ).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
