'use server';

import { Property } from '@/types/property';

interface Filters {
    search: string;
    area: string;
    type: string;
    status: 'available' | 'fractionalized' | '';
}

export async function getProperties(pageParam: number, filters: Filters): Promise<Property[]> {
    const queryParams = new URLSearchParams({
        offset: pageParam.toString(),
        limit: '10',
        q: filters.search,
    });

    // Build filter array
    const filterArray = [];

    // Add area filter if provided
    if (filters.area && filters.area !== 'all') {
        filterArray.push(`area_name_en="${filters.area}"`);
    }

    // Add type filter if provided
    if (filters.type && filters.type !== 'all') {
        filterArray.push(`property_type="${filters.type}"`);
    }

    // Join filters with AND operator if any exist
    if (filterArray.length > 0) {
        queryParams.set('filter', filterArray.join(' AND '));
    }
    const properties = await fetch(
        `${process.env.NEXT_PUBLIC_MEILI_URL}/indexes/properties/search?${queryParams.toString()}`
    );
    const data = await properties.json();
    if (properties.ok) {
        return data.hits;
    }
    return [];
}

export async function getAllPropertyTypes(): Promise<{ propertyTypes: string[]; areas: string[] }> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_MEILI_URL}/indexes/properties/search`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: '',
                    facets: ['property_type', 'area_name_en'],
                    limit: 0,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Extract just the property type values
        const propertyTypes = Object.keys(data.facetDistribution.property_type);
        const areas = Object.keys(data.facetDistribution.area_name_en);

        return { propertyTypes, areas };
    } catch (error) {
        console.error('Error fetching facets:', error);
        throw error;
    }
}
