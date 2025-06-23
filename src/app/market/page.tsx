import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function MarketPage() {
    return (
        <>
            <SignedIn>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">Market</h1>
                        <p className="text-lg text-gray-600 mb-8 text-center">Market overview and options will appear here.</p>
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
} 