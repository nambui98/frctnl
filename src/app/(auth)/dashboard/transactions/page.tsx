'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

export default function TransactionsPage() {
    const [activeFilter, setActiveFilter] = useState<TransactionType | 'all'>('all');

    const filteredTransactions = transactions.filter(
        (transaction) => activeFilter === 'all' || transaction.type === activeFilter
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
                <p className="mt-2 text-gray-500">
                    View your property transactions and blockchain activity
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <Button
                    variant={activeFilter === 'all' ? 'default' : 'outline'}
                    className={cn(
                        activeFilter !== 'all' &&
                            'bg-transparent font-semibold rounded-lg hover:bg-primary/10'
                    )}
                    onClick={() => setActiveFilter('all')}
                >
                    All Transactions
                </Button>
                <Button
                    variant={activeFilter === 'buy' ? 'default' : 'outline'}
                    className={cn(
                        activeFilter !== 'buy' &&
                            'bg-transparent font-semibold rounded-lg hover:bg-primary/10'
                    )}
                    onClick={() => setActiveFilter('buy')}
                >
                    Purchases
                </Button>
                <Button
                    variant={activeFilter === 'sell' ? 'default' : 'outline'}
                    className={cn(
                        activeFilter !== 'sell' &&
                            'bg-transparent font-semibold rounded-lg hover:bg-primary/10'
                    )}
                    onClick={() => setActiveFilter('sell')}
                >
                    Sales
                </Button>
                <Button
                    variant={activeFilter === 'transfer' ? 'default' : 'outline'}
                    className={cn(
                        activeFilter !== 'transfer' &&
                            'bg-transparent font-semibold rounded-lg hover:bg-primary/10'
                    )}
                    onClick={() => setActiveFilter('transfer')}
                >
                    Transfers
                </Button>
                <Button
                    variant={activeFilter === 'fractionalize' ? 'default' : 'outline'}
                    className={cn(
                        activeFilter !== 'fractionalize' &&
                            'bg-transparent font-semibold rounded-lg hover:bg-primary/10'
                    )}
                    onClick={() => setActiveFilter('fractionalize')}
                >
                    Fractionalizations
                </Button>
            </div>

            <Card className="py-0 overflow-hidden shadow-none">
                <div className="divide-y divide-gray-200">
                    {filteredTransactions.length === 0 ? (
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
                        filteredTransactions.map((transaction) => (
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
