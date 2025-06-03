import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

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

type TransactionType = 'buy' | 'sell' | 'transfer' | 'fractionalize';
interface Transaction {
    id: string;
    type: TransactionType;
    title: string;
    description: string;
    amount: string;
    timestamp: string;
    transactionId: string;
}
const transactions: Transaction[] = [
    {
        id: '1',
        type: 'buy',
        title: 'Purchased 25% of Burj Khalifa Residences',
        description: 'Transaction ID: 0x1a2b3c4d...5e6f7g8h',
        amount: 'AED 850,000',
        timestamp: '2 hours ago',
        transactionId: '0x1a2b3c4d...5e6f7g8h',
    },
    {
        id: '2',
        type: 'transfer',
        title: 'Fractionalized Marina Bay Apartment',
        description: 'Created 100 shares • Transaction ID: 0x2b3c4d5e...6f7g8h9i',
        amount: '100 Shares',
        timestamp: '1 day ago',
        transactionId: '0x2b3c4d5e...6f7g8h9i',
    },
    {
        id: '3',
        type: 'buy',
        title: 'Purchased 8% of Palm Villa Collection',
        description: 'Transaction ID: 0x9a8b7c6d...1e2f3g4h',
        amount: 'AED 1,180,000',
        timestamp: '3 days ago',
        transactionId: '0x9a8b7c6d...1e2f3g4h',
    },
    {
        id: '4',
        type: 'sell',
        title: 'Sold 3% of JBR Penthouse',
        description: 'Transaction ID: 0x5f4e3d2c...9h8g7f6e',
        amount: 'AED 165,000',
        timestamp: '1 week ago',
        transactionId: '0x5f4e3d2c...9h8g7f6e',
    },
    {
        id: '5',
        type: 'transfer',
        title: 'Fractionalized City Walk Townhouse',
        description: 'Created 50 shares • Transaction ID: 0x3c4d5e6f...7g8h9i0j',
        amount: '50 Shares',
        timestamp: '2 weeks ago',
        transactionId: '0x3c4d5e6f...7g8h9i0j',
    },
];

export default async function PropertiesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Investment Portfolio</h1>
                <p className="mt-2 text-gray-500">
                    Track your fractional property investments and returns
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,1fr)] gap-6">
                <Card className="p-6 shadow-none hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Fractionalized Properties
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">8</p>
                    <p className="text-sm font-semibold text-green-600">+2 this month</p>
                </Card>

                <Card className="p-6 shadow-none hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Total Shares Sold</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">48</p>
                    <p className="text-sm font-semibold text-green-600">+10 this month</p>
                </Card>

                <Card className="p-6 shadow-none hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue Generated</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">AED 1,250,000</p>
                    <p className="text-sm font-semibold text-green-600">+10% this month</p>
                </Card>

                <Card className="p-6 shadow-none hover:border-primary hover:shadow-lg transition-all">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Active Investors</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">12</p>
                    <p className="text-sm font-semibold text-green-600">+2 this month</p>
                </Card>
            </div>

            <Card className="py-0 overflow-hidden shadow-none mb-4">
                <div>
                    <div className="px-6 py-4 bg-gradient-to-r from-primary-20 to-primary-dark-20">
                        <h2 className="text-lg font-bold text-primary-dark">
                            Your Fractionalized Properties
                        </h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="p-6 grid grid-cols-[2fr_repeat(5,1fr)] gap-4 items-center">
                            <div>
                                <h3 className="font-semibold text-gray-dark">Property</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-dark">Total Shares</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-dark">Shares Sold</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-dark">Your Ownership</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-dark">Monthly Income</h3>
                            </div>
                            <div className="flex items-center justify-end">
                                <h3 className="font-semibold text-gray-dark">Actions</h3>
                            </div>
                        </div>
                        {investments.map((investment) => (
                            <div
                                key={investment.id}
                                className="p-6 grid grid-cols-[2fr_repeat(5,1fr)] gap-4 items-center"
                            >
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
                                <div className="flex items-center justify-end">
                                    <Button size="sm">Manage</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
            <h2 className="text-xl font-semibold text-dark mb-4">Recent Investor Activity</h2>
            <Card className="py-0 overflow-hidden shadow-none">
                <div className="divide-y divide-gray-200">
                    {transactions.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="text-6xl mb-4">📋</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No Transactions Found
                            </h3>
                            <p className="text-gray-500">
                                No transactions match your selected filter. Try selecting a
                                different category.
                            </p>
                        </div>
                    ) : (
                        transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="p-6 hover:bg-primary-20 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={cn(
                                                'w-10 h-10 rounded-full flex items-center justify-center text-lg',
                                                transaction.type === 'buy' &&
                                                    'bg-green-100 text-green-600',
                                                transaction.type === 'sell' &&
                                                    'bg-red-100 text-red-600',
                                                transaction.type === 'transfer' &&
                                                    'bg-primary/10 text-primary-dark'
                                            )}
                                        >
                                            {transaction.type === 'buy' && '💰'}
                                            {transaction.type === 'sell' && '💸'}
                                            {transaction.type === 'transfer' && '🔄'}
                                            {transaction.type === 'fractionalize' && '📊'}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                {transaction.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {transaction.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">
                                            {transaction.amount}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {transaction.timestamp}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </Card>
        </div>
    );
}
