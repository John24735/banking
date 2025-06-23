import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    bankAccounts: defineTable({
        userId: v.string(),
        bank: v.string(),
        number: v.string(),
        name: v.string(),
        exp: v.string(),
        logo: v.string()
    })
}); 