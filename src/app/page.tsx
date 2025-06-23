"use client";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function RedirectHome() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/home');
  }, [router]);
  return null;
}

export default function Home() {
  return (
    <>
      <SignedIn>
        <RedirectHome />
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center">
            <Image src="/bank-hero.svg" alt="Bank Logo" width={80} height={80} className="mb-6" />
            <h1 className="text-4xl font-bold mb-2 text-gray-900">Welcome to Modern Bank</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">Your secure, modern banking experience. Manage your accounts, cards, and more—all in one place.</p>
            <div className="flex gap-4">
              <SignInButton mode="modal">
                <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-6 py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition">Sign Up</button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
}
