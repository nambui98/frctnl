/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BathIcon, BedIcon, FileTextIcon, RulerIcon } from 'lucide-react';
import Link from 'next/link';

interface PropertyCardProps {
    property: {
        id: number;
        title: string;
        location: string;
        price: number;
        type: string;
        bedrooms: number;
        bathrooms: number;
        size: string;
        dld: string;
        status: 'available' | 'fractionalized';
        fractionalized: boolean;
        sharesCreated?: number;
        sharesOwned?: number;
        image: string;
    };
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className="group border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5">
            <div className="relative h-48">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Badge
                    variant="secondary"
                    className={cn(
                        'absolute bottom-4 left-4 font-semibold text-white text-xs py-1 px-3 rounded-full',
                        property.fractionalized ? 'bg-gray-500' : 'bg-primary-dark/90'
                    )}
                >
                    {property.fractionalized ? 'Fractionalized' : 'Available'}
                </Badge>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{property.location}</p>

                <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold text-primary-dark bg-linear-to-r from-primary-20 to-transparent px-3 py-1 rounded-lg shadow-[0_2px_8px_0_var(--primary-20)]">
                        AED {property.price.toLocaleString()}
                    </div>
                    <Badge
                        variant="outline"
                        className="text-primary-dark bg-primary-20 rounded-full border-none px-3 py-1 font-semibold"
                    >
                        {property.type}
                    </Badge>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <BedIcon className="text-primary-dark/80 h-4" />
                        {property.bedrooms} bed
                    </span>
                    <span className="flex items-center gap-1">
                        <BathIcon className="text-primary-dark/80 h-4" />
                        {property.bathrooms} bath
                    </span>
                    <span className="flex items-center gap-1">
                        <RulerIcon className="text-primary-dark/80 h-4" />
                        {property.size}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                        <FileTextIcon className="text-primary-dark/80 h-4" />
                        {property.dld}
                    </span>
                </div>

                {property.fractionalized ? (
                    <Button
                        variant="secondary"
                        className="w-full bg-gray-100 text-gray-500 cursor-not-allowed"
                        disabled
                        size={'xl'}
                    >
                        Already Fractionalized ({property.sharesOwned}/{property.sharesCreated}{' '}
                        shares)
                    </Button>
                ) : (
                    <Button
                        className="w-full bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/20"
                        size={'xl'}
                        asChild
                    >
                        <Link href={'/dashboard/properties/' + property.id}>
                            Fractionalize Property
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}
