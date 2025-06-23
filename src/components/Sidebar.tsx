"use client";
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Wallet,
    Landmark,
    CreditCard,
    BarChart3,
    Users,
    FileText,
    BellRing,
    LogOut,
    Settings,
    PiggyBank,
    HandCoins,
    LifeBuoy,
    Grid3X3,
    ChevronDown
} from "lucide-react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const sidebarItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Grid3X3 },
    { name: 'Accounts', href: '/balance', icon: Wallet },
    { name: 'Transactions', href: '/transaction', icon: Landmark },
    { name: 'Cards', href: '/card-budget', icon: CreditCard },
    { name: 'Investments', href: '/investment', icon: HiOutlineCurrencyDollar },
    { name: 'Loans', href: '/subscription', icon: HandCoins },
    { name: 'Employees', href: '/employees', icon: Users },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Support', href: '/support', icon: LifeBuoy },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

const WeaveLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L12 6L18 12L12 18L6 12Z" fill="#16A34A" />
        <path d="M12 21L3 12L12 3L21 12L12 21Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Sidebar = () => {
    const pathname = usePathname();
    const [requestOpen, setRequestOpen] = useState(false);

    return (
        <aside className="w-64 bg-white p-6 flex flex-col justify-between border-r border-gray-100">
            <div>
                <div className="flex items-center space-x-2.5 mb-10">
                    <WeaveLogo />
                    <span className="text-xl font-bold text-gray-800">WEAVE</span>
                </div>
                <nav className="space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center space-x-3 rounded-lg px-4 py-2 ${pathname === item.href ? 'bg-[#E6F9F0] text-[#16A34A] font-bold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
                        >
                            <item.icon className={`w-5 h-5 ${pathname === item.href ? 'text-[#16A34A]' : ''}`} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="pt-4 space-y-1">
                <a href="#" className="flex items-center space-x-3 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-800">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </a>
                <a href="#" className="flex items-center space-x-3 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-800">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;