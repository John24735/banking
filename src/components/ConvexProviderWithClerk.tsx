"use client";
import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexProviderWithClerk({ children }: { children: ReactNode }) {
    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    );
} 