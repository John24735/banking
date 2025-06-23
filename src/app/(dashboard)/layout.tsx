"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@clerk/nextjs";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = useUser();
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header user={user} />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
} 