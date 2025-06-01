'use client';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <Sidebar />
                    </div>
                    <main className="col-span-9">
                        <div className="bg-white rounded-xl shadow-sm p-6">{children}</div>
                    </main>
                </div>
            </div>
        </div>
    );
}
