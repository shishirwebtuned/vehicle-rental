import { VehicleType } from "@/types/type";

export async function getVehicleBySlug(
  slug: string
): Promise<VehicleType | null> {
  try {
    const id = slug.split("-").pop();

    const res = await fetch(
      `${
        process.env.BACKEND_URI || process.env.NEXT_PUBLIC_BACKEND_URI
      }/vehicles/${id}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const json = await res.json();
    return json?.data?.vehicle || null;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    return null;
  }
}
