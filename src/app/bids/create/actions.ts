'use server'

import {database} from "@/db/database";
import { items } from "@/db/schema";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function  createItemAction(formData: FormData) {
    const session = await auth();

    if (!session) {
        throw new Error("Unauthorized")
    }

    const user = session.user;

    if (!user || !user.id) {
        throw new Error("Unauthorized")
    }

    const MaximumPrice = formData.get("MaximumPrice") as string;

    const priceAsCents = Math.floor(parseFloat(MaximumPrice) * 100);
    
        await database.insert(items).values({
          name: formData.get("name") as string,
          MaximumPrice: priceAsCents,
          userId: user.id,
        });
        redirect('/')
    
}