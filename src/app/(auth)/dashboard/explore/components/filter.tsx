'use client';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react';
import { PropertyStatus } from '../page';
import { useDebounce } from '@/hooks/use-debounce';
import { useQuery } from '@tanstack/react-query';
import { getAllPropertyTypes } from '../action';
import { Check, ChevronDown } from 'lucide-react';
import { CommandEmpty, CommandInput } from '@/components/ui/command';
import { CommandGroup, CommandList } from '@/components/ui/command';
import { CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Command } from '@/components/ui/command';
import { cn } from '@/lib/utils';

interface FilterProps {
    onFilterChange: (filters: {
        search: string;
        area: string;
        type: string;
        status: PropertyStatus | '';
    }) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [areaFilter, setAreaFilter] = useState<string>('all');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<PropertyStatus | ''>('available');

    const { data: filterData } = useQuery({
        queryKey: ['property-types'],
        queryFn: getAllPropertyTypes,
    });

    console.log(filterData);

    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        onFilterChange({
            search: debouncedSearch,
            area: areaFilter,
            type: typeFilter,
            status: statusFilter,
        });
    }, [debouncedSearch, areaFilter, typeFilter, statusFilter, onFilterChange]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Properties</h2>
                <div className="flex gap-4">
                    <Input
                        type="text"
                        placeholder="Search properties by name, location, or DLD ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 min-h-12"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            className={cn('w-[200px] justify-between text-inherit font-normal')}
                        >
                            {areaFilter === 'all' ? 'All Areas' : areaFilter}
                            <ChevronDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0" align="start">
                        <Command>
                            <CommandInput placeholder="Search area..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No area found.</CommandEmpty>
                                <CommandGroup>
                                    <CommandItem value="all" onSelect={() => setAreaFilter('all')}>
                                        All Areas
                                    </CommandItem>
                                    {filterData?.areas.map((area) => (
                                        <CommandItem
                                            key={area}
                                            value={area}
                                            onSelect={(currentValue) => {
                                                setAreaFilter(
                                                    currentValue === areaFilter
                                                        ? 'all'
                                                        : currentValue
                                                );
                                            }}
                                        >
                                            {area}
                                            <Check
                                                className={cn(
                                                    'ml-auto',
                                                    areaFilter === area
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <Select value={typeFilter} onValueChange={(value: string) => setTypeFilter(value)}>
                    <SelectTrigger className="w-[180px] capitalize">
                        <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {filterData?.propertyTypes.map((type) => (
                            <SelectItem className="capitalize" key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
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
    );
}
