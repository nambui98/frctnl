'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Investment {
    id: number;
    name: string;
    location: string;
    value: number;
    ownership: number;
    return: number;
    monthlyIncome: number;
    icon: string;
}

const investments: Investment[] = [
    {
        id: 1,
        name: 'Burj Khalifa Residences',
        location: 'Downtown Dubai',
        value: 850000,
        ownership: 25,
        return: 15.2,
        monthlyIncome: 6500,
        icon: '🏢',
    },
    {
        id: 2,
        name: 'Marina Bay Towers',
        location: 'Dubai Marina',
        value: 420000,
        ownership: 12,
        return: 8.7,
        monthlyIncome: 2800,
        icon: '🏖️',
    },
    {
        id: 3,
        name: 'Palm Villa Collection',
        location: 'Palm Jumeirah',
        value: 1180000,
        ownership: 8,
        return: 22.1,
        monthlyIncome: 9200,
        icon: '🌴',
    },
];

export default function PortfolioPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Investment Portfolio</h1>
                <p className="mt-2 text-gray-500">
                    Track your fractional property investments and returns
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Total Portfolio Value
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">AED 2,450,000</p>
                    <p className="text-sm font-semibold text-green-600">+12.5% this month</p>
                </Card>

                <Card className="p-6 hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Properties Invested</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">8</p>
                    <p className="text-sm font-semibold text-green-600">+2 this month</p>
                </Card>

                <Card className="p-6 hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Average Ownership</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">15.3%</p>
                    <p className="text-sm font-semibold text-green-600">+2.1% this month</p>
                </Card>

                <Card className="p-6 hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Monthly Returns</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">AED 18,750</p>
                    <p className="text-sm font-semibold text-green-600">+8.2% this month</p>
                </Card>
            </div>

            <Card className="py-0 overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-primary-20 to-primary-dark-20">
                    <h2 className="text-lg font-bold text-primary-dark">
                        Your Property Investments
                    </h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {investments.map((investment) => (
                        <div key={investment.id} className="p-6">
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white text-2xl">
                                        {investment.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {investment.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {investment.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-left font-semibold text-gray-900">
                                        AED {investment.value.toLocaleString()}
                                    </p>
                                    <div className="w-32 mt-1">
                                        <Progress value={investment.ownership} className="h-2" />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-semibold text-gray-900">
                                        {investment.ownership}%
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-semibold text-green-600">
                                        +{investment.return}%
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-semibold text-gray-900">
                                        AED {investment.monthlyIncome.toLocaleString()}/mo
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
