/* eslint-disable @next/next/no-img-element */
import {
    BathIcon,
    BedIcon,
    BuildingIcon,
    CoinsIcon,
    FileTextIcon,
    MapPinIcon,
    RulerIcon,
} from 'lucide-react';
import React from 'react';
import FractionalizeForm from './components/fractionalize-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    params: Promise<{ id: number }>;
};

export default async function PropertyPage({ params }: Props) {
    const { id } = await params;
    const property = {
        id: id,
        title: 'Marina Bay Apartment',
        location: 'Dubai Marina',
        price: 2800000,
        type: 'Apartment',
        bedrooms: 3,
        bathrooms: 2,
        size: '1,450 sqft',
        dld: 'DLD-2024-001235',
        status: 'available',
        fractionalized: false,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop&crop=center',
    };

    return (
        <div>
            <Button asChild variant={'secondary'} size={'xl'} className="text-base font-bold mb-6">
                <Link href={'/dashboard/properties'}>
                    <span className="mr-2">←</span> Back to My Properties
                </Link>
            </Button>
            <div className="bg-gray-light rounded-xl pr-5 mb-8 shadow-[0_2px_8px_0_rgba(93, 63, 211, 0.04)] flex gap-8 items-stretch overflow-hidden">
                <img
                    className="min-w-[120px] max-w-[220px] object-cover block shadow-[0_2px_12px_#0001]"
                    src={property.image}
                    alt=""
                />
                <div className="flex-1 p-5 space-y-2">
                    <h2 className="font-bold text-2xl">{property.title}</h2>
                    <div className="text-gray-dark flex gap-1 items-center font-medium">
                        <MapPinIcon className="text-primary-dark size-4" />
                        {property.location}
                    </div>
                    <div className="flex items-center gap-6 text-gray-dark font-medium">
                        <span className="flex items-center gap-1">
                            <BuildingIcon className="text-primary-dark size-4" />
                            {property?.type}
                        </span>
                        <span className="flex items-center gap-1">
                            <BedIcon className="text-primary-dark size-4" />
                            {property?.bedrooms}
                        </span>
                        <span className="flex items-center gap-1">
                            <BathIcon className="text-primary-dark size-4" />
                            {property.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                            <RulerIcon className="text-primary-dark size-4" />
                            {property.size}
                        </span>
                    </div>
                    <div className="flex items-center gap-6 text-primary-dark font-medium">
                        <span className="flex items-center gap-1">
                            <FileTextIcon className="text-primary-dark size-4" />
                            {property.dld}
                        </span>
                        <span className="flex items-center gap-1">
                            <CoinsIcon className="text-primary-dark size-4" />
                            AED {property.price.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
            <FractionalizeForm />
        </div>
    );
}
