export default function AddBankAccountCard() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center min-w-[280px] min-h-[160px] cursor-pointer hover:bg-blue-50 transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <span className="text-3xl text-blue-600">+</span>
            </div>
            <div className="font-semibold text-gray-700">Add Bank Account</div>
        </div>
    );
} 