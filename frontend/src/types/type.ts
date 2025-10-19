export interface Vehicle {
  name: string;
  licensePlate: string;
  type: string;
  passengers: number;
  fuel: string;
  image: string;
}
export interface VehicleType {
  _id: string;
  name: string;
  brand: string;
  vehicleModel: string;
  category: { name: string };
  numberPlate: string;
  seats: number;
  fuelType: string;
  availabilityStatus: boolean;
  image: { url: string };
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface VehicleCardProps {
  vehicle: {
    _id: string;
    name: string;
    brand: string;
    vehicleModel: string;
    category: { name: string };
    numberPlate: string;
    seats: number;
    fuelType: string;
    pricePerDay: number;
    availabilityStatus: boolean;
    image: { url: string };
    description: string;
  };
}

export interface VehiclePageProps {
  params: Promise<{ slug: string }>;
}
