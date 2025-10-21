import { Metadata } from 'next';
import { services } from '@/data/data';
import ServiceDetail from './ServiceDetail';
import { notFound } from 'next/navigation';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const service = services.find(s => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service could not be found'
        };
    }

    return {
        title: `${service.title} | Grateful Tours & Transportation`,
        description: service.content,
        openGraph: {
            title: service.title,
            description: service.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;

    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetail service={service} />;
}