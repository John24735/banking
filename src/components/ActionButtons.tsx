import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ArrowLeftRight } from "lucide-react";

export default function ActionButtons() {
    return (
        <div className="flex space-x-2 mt-2 md:mt-0">
            <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#16A34A] text-white hover:bg-green-700 transition font-semibold">
                <HiOutlineCurrencyDollar className="w-4 h-4 mr-1" /> Invest
            </button>
            <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#16A34A] text-white hover:bg-green-700 transition font-semibold">
                <ArrowLeftRight className="w-4 h-4 mr-1" /> Transfer
            </button>
            <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#F59E42] text-white hover:bg-orange-500 transition font-semibold">
                <ArrowLeftRight className="w-4 h-4 mr-1" /> Withdraw
            </button>
            <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#3B82F6] text-white hover:bg-blue-700 transition font-semibold">
                <ArrowLeftRight className="w-4 h-4 mr-1" /> Deposit
            </button>
        </div>
    );
} 