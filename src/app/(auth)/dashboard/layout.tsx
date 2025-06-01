import { DashboardLayout } from '@/components/layout/DashboardLayout';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
