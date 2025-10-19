
import { Metadata } from "next";
import VehicleDetail from "./Components/VehicleDetail";
import { getVehicleBySlug } from "@/seo/getVehicleBySlug";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

    const { slug } = await params;

    const vehicle = await getVehicleBySlug(slug);

    if (!vehicle) {
        return {
            title: "Vehicle not found | Grateful Tours",
            description: "This vehicle listing could not be found.",
        };
    }

    const title = `${vehicle.brand} - ${vehicle.name} - Rent Now | Grateful Tours`;
    const description = vehicle.description || `${vehicle.brand} ${vehicle.name} is available for rent. Book now!`;
    const image = vehicle.image?.url || "/default-vehicle.jpg";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/our-cars/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [{ url: image, alt: `${vehicle.brand} ${vehicle.name}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },

    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const vehicle = await getVehicleBySlug(slug);

    if (!vehicle) return <p>Vehicle not found.</p>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Car",
        name: `${vehicle.brand} ${vehicle.name}`,
        image: vehicle.image?.url || "/default-vehicle.jpg",
        model: vehicle.vehicleModel,
        description: vehicle.description,
        sku: vehicle._id,
        brand: { "@type": "Brand", name: vehicle.brand },
        offers: {
            "@type": "Offer",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/our-cars/${slug}`,
            availability: vehicle.availabilityStatus
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <VehicleDetail slug={slug} />
        </>
    );
}
