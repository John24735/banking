"use client";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { useUser } from '@clerk/nextjs';
import BankAccountCard from '@/components/BankAccountCard';
import AddBankAccountCard from '@/components/AddBankAccountCard';
import { Doc } from "@/../convex/_generated/dataModel";

export default function DashboardContent() {
    const { user } = useUser();
    // TODO: Replace with real Convex data fetching
    const accounts: Doc<"bankAccounts">[] = []; // useQuery(api.bankAccounts.getBankAccounts, { userId: user?.id });

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-2">Bank Accounts</h1>
            <p className="text-gray-500 mb-8">Overview of you bank account</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AddBankAccountCard />
                {/* Placeholder for when accounts exist */}
                {accounts && accounts.length > 0 ? (
                    accounts.map((acc) => (
                        <BankAccountCard key={acc._id} {...acc} />
                    ))
                ) : (
                    // You can add more placeholder cards or a message here
                    <>
                        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse min-h-[160px]"></div>
                        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse min-h-[160px]"></div>
                        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse min-h-[160px]"></div>
                    </>
                )}
            </div>
        </div>
    );
} 