import { VehicleType } from "@/types/type";

export async function getVehicleBySlug(
  slug: string
): Promise<VehicleType | null> {
  try {
    const id = slug.split("-").pop();

    const baseUrl =
      process.env.BACKEND_URI || process.env.NEXT_PUBLIC_BACKEND_URI;
    const apiUrl = `${baseUrl}/vehicles/${id}`;

    console.log("Fetching from:", apiUrl);

    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    return json?.data?.vehicle || null;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    return null;
  }
}
