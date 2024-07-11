"use server";

import { revalidatePath } from "next/cache";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getSignedUrlForS3Object } from "@/lib/s3";

export async function createUploadUrlAction(key: string, type: string) {
 return await getSignedUrlForS3Object(key, type);
}

export async function  createItemAction({
    fileName,
    name,
    StartingPrice,
    endDate

}: {fileName: string, name: string, StartingPrice: number, endDate: Date}) {
    const session = await auth();

    if (!session) {
        throw new Error("Unauthorized")
    }

    const user = session.user;

    if (!user || !user.id) {
        throw new Error("Unauthorized")
    }


    await database.insert(items).values({
        name,
        StartingPrice,
        fileKey: fileName,
        currentBid: StartingPrice,
        userId: user.id,
        endDate,
      });
        redirect('/')
    
}