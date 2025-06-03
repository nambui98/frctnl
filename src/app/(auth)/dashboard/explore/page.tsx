'use client';
import { PropertyCard } from '@/components/properties/PropertyCard';
import Filter from './components/filter';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getProperties } from './action';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export type PropertyStatus = 'available' | 'fractionalized';

interface Filters {
    search: string;
    area: string;
    type: string;
    status: PropertyStatus | '';
}

export default function ExplorePage() {
    const [filters, setFilters] = useState<Filters>({
        search: '',
        area: '',
        type: '',
        status: 'available',
    });

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
        queryKey: ['properties', filters],
        queryFn: ({ pageParam = 0 }) => getProperties(pageParam, filters),
        getNextPageParam: (lastPage, allPages) => {
            // If we have less than 10 items in the last page, we've reached the end
            if (lastPage.length < 10) return undefined;
            // Calculate next offset based on current number of items
            return allPages.reduce((total, page) => total + page.length, 0);
        },
        initialPageParam: 0,
    });

    const properties = data?.pages.flatMap((page) => page) ?? [];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Explore</h1>
                <p className="mt-2 text-gray-500">
                    Browse and manage your real estate portfolio. Add, fractionalize, or view
                    details of your properties registered with the Dubai Land Department.
                </p>
            </div>

            <Filter onFilterChange={setFilters} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {status === 'pending' ? (
                    <div className="col-span-full text-center py-12">
                        <div className="text-6xl mb-4">⌛</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Loading Properties...
                        </h3>
                    </div>
                ) : status === 'error' ? (
                    <div className="col-span-full text-center py-12">
                        <div className="text-6xl mb-4">❌</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Error Loading Properties
                        </h3>
                        <p className="text-gray-500">Please try again later.</p>
                    </div>
                ) : properties.length === 0 ? (
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
                    <>
                        {properties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={{
                                    id: property.property_id,
                                    title: property.search_text,
                                    location: property.area_name_en,
                                    price: 0, // You might want to add price to your API response
                                    type: property.property_type,
                                    bedrooms: property.rooms || 0,
                                    bathrooms: 0, // You might want to add bathrooms to your API response
                                    size: `${property.actual_area} sqft`,
                                    dld: property.id,
                                    status: 'available',
                                    fractionalized: false,
                                    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop&crop=center', // You might want to add image to your API response
                                }}
                            />
                        ))}
                        {hasNextPage && (
                            <div className="col-span-full flex justify-center py-4">
                                <Button
                                    onClick={() => fetchNextPage()}
                                    disabled={isFetchingNextPage}
                                    variant="outline"
                                >
                                    {isFetchingNextPage ? 'Loading more...' : 'Load More'}
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
