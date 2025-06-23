"use client";
import { Bell, MessageSquare, Search, User } from 'lucide-react';

const Header = ({ user }: { user: any }) => {
    return (
        <header className="bg-light-background p-4 pl-6 flex justify-between items-center">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search here"
                    className="pl-12 pr-4 py-3 w-80 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-3 rounded-lg hover:bg-gray-100 border border-gray-200 bg-white">
                    <MessageSquare className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-3 rounded-lg hover:bg-gray-100 border border-gray-200 bg-white">
                    <Bell className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex items-center space-x-3">
                    {user?.imageUrl ? (
                        <img src={user.imageUrl} alt="User profile" className="w-12 h-12 rounded-full" />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-600" />
                        </div>
                    )}
                    <div>
                        <p className="font-semibold text-sm text-gray-800">{user?.fullName ?? 'Niko Flamini'}</p>
                        <p className="text-xs text-gray-500">{user?.primaryEmailAddress?.emailAddress ?? 'nflamini@yahoo.com'}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 