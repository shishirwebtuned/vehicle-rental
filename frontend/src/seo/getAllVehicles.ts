import { VehicleType } from "@/types/type";

export async function getAllVehicles(): Promise<VehicleType[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/vehicles`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.vehicles || [];
  } catch (err) {
    console.error("Error fetching all vehicles:", err);
    return [];
  }
}
