'use client';

import { useState } from 'react';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type PropertyStatus = 'available' | 'fractionalized';

interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    dld: string;
    status: PropertyStatus;
    fractionalized: boolean;
    sharesCreated?: number;
    sharesOwned?: number;
    image: string;
}

// Sample property data
const userOwnedProperties: Property[] = [
    {
        id: 1,
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
    },
    {
        id: 2,
        title: 'City Walk Townhouse',
        location: 'City Walk',
        price: 4200000,
        type: 'Townhouse',
        bedrooms: 3,
        bathrooms: 4,
        size: '2,100 sqft',
        dld: 'DLD-2024-001238',
        status: 'fractionalized',
        fractionalized: true,
        sharesCreated: 50,
        sharesOwned: 40,
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 3,
        title: 'DIFC Tower Apartment',
        location: 'DIFC',
        price: 1950000,
        type: 'Apartment',
        bedrooms: 1,
        bathrooms: 2,
        size: '850 sqft',
        dld: 'DLD-2024-001239',
        status: 'available',
        fractionalized: false,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop&crop=center',
    },
    {
        id: 4,
        title: 'Palm Jumeirah Villa',
        location: 'Palm Jumeirah',
        price: 8500000,
        type: 'Villa',
        bedrooms: 4,
        bathrooms: 5,
        size: '3,200 sqft',
        dld: 'DLD-2024-001240',
        status: 'available',
        fractionalized: false,
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=300&fit=crop&crop=center',
    },
];

export default function PropertiesPage() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [areaFilter, setAreaFilter] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<PropertyStatus | ''>('available');

    const filteredProperties = userOwnedProperties.filter((property) => {
        const matchesSearch =
            searchTerm === '' ||
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.dld.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesArea =
            areaFilter === '' || property.location.toLowerCase().includes(areaFilter.toLowerCase());

        const matchesType =
            typeFilter === '' || property.type.toLowerCase() === typeFilter.toLowerCase();

        const matchesStatus = statusFilter === '' || property.status === statusFilter;

        return matchesSearch && matchesArea && matchesType && matchesStatus;
    });

    // const handleFractionalize = (propertyId: number) => {
    //     // Handle fractionalization
    //     console.log('Fractionalize property:', propertyId);
    // };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
                <p className="mt-2 text-gray-500">
                    Fractionalize your owned properties from the Dubai Land Department registry
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Search Your Properties
                    </h2>
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Search your properties by name, location, or DLD ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 min-h-12"
                        />
                        <Button size={'xl'}>Search</Button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Select
                        value={areaFilter}
                        onValueChange={(value: string) => setAreaFilter(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Areas" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Areas</SelectItem>
                            <SelectItem value="downtown">Downtown Dubai</SelectItem>
                            <SelectItem value="marina">Dubai Marina</SelectItem>
                            <SelectItem value="jbr">Jumeirah Beach Residence</SelectItem>
                            <SelectItem value="palm">Palm Jumeirah</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={typeFilter ?? ''}
                        onValueChange={(value: string) => setTypeFilter(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={statusFilter}
                        onValueChange={(value: PropertyStatus | '') => setStatusFilter(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="available">Available to Fractionalize</SelectItem>
                            <SelectItem value="fractionalized">Already Fractionalized</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredProperties.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                        <div className="text-6xl mb-4">🏠</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No Properties Found
                        </h3>
                        <p className="text-gray-500">
                            No properties match your search criteria. Try adjusting your filters.
                        </p>
                    </div>
                ) : (
                    filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                )}
            </div>
        </div>
    );
}
