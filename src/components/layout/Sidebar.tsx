import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const navigation = [
    {
        name: 'Explore',
        href: '/dashboard/explore',
        icon: '🏠',
    },
    {
        name: 'My Properties',
        href: '/dashboard/properties',
        icon: '🔗',
    },

    {
        name: 'Investment Portfolio',
        href: '/dashboard/portfolio',
        icon: '💼',
    },
    {
        name: 'Transaction History',
        href: '/dashboard/transactions',
        icon: '📋',
    },
];

const quickActions = [
    {
        name: 'Add Property',
        href: '/dashboard/properties/add',
        icon: '➕',
    },
    {
        name: 'Analytics',
        href: '/dashboard/analytics',
        icon: '📊',
    },
    {
        name: 'Settings',
        href: '/dashboard/settings',
        icon: '⚙️',
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        // <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl shadow-lg p-6">
        <div className="flex-col bg-[linear-gradient(135deg,#f5f7fa_0%,#e9eafc_100%)] rounded-[0.75rem] shadow-[0_2px_16px_0_rgba(93,63,211,0.08)] p-8 pt-8 pb-6 px-6 h-fit sticky top-[104px] flex">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    F
                </div>
                <span className="text-xl font-bold text-primary-dark tracking-wide">Frctnl</span>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider mb-4">
                        Main Navigation
                    </h3>
                    <nav className="space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'flex items-center gap-3 px-3 py-2.5 text-base font-medium rounded-lg transition-colors relative before:content-normal before:h-0 before:transition-all before:rounded-[3px] before:absolute before:left-1 before:w-[5px] before:bg-primary',
                                    pathname === item.href
                                        ? ' bg-linear-to-r from-primary-20 to-transparent text-primary-dark before:h-7 '
                                        : 'text-gray-600 hover:bg-primary-20 hover:text-primary-dark'
                                )}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="mb-6">
                    <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider mb-4">
                        Quick Actions
                    </h3>
                    <nav className="space-y-1">
                        {quickActions.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-gray-600 rounded-lg hover:bg-primary/10 hover:text-primary-dark transition-colors"
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary-dark text-white font-bold">
                            JD
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold text-primary-dark">John Doe</p>
                        <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
