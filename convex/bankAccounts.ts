import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getBankAccounts = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("bankAccounts")
            .withIndex("userId", (q) => q.eq("userId", args.userId))
            .collect();
    },
});

export const addBankAccount = mutation({
    args: {
        userId: v.string(),
        bank: v.string(),
        number: v.string(),
        name: v.string(),
        exp: v.string(),
        logo: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("bankAccounts", args);
    },
}); 