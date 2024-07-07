'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction, createUploadUrlAction } from "./actions";

export default function CreatePage() {

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-8">
        Post an Item
      </h1>
      <form 
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const file = formData.get("file") as File;

          const uploadUrl = await createUploadUrlAction(file.name, file.type);
          const uploadFormData = new FormData();
          uploadFormData.append("file", file);

          await fetch(uploadUrl, {
            method: "PUT",
            body: uploadFormData,
            headers: {
              "Content-Type": file.type,
            }
          });


          const name = formData.get("name") as string;
          const startingPrice = parseInt(formData.get("startingPrice") as string);
          const startingPriceInCents = Math.floor(startingPrice * 100)

          await createItemAction({
            name,
            startingPrice: startingPriceInCents,
            fileName: file.name,
          });
        }}
      >
        <Input 
            required 
            className="max-w-lg" 
            name="name" 
            placeholder="Name your item" 
        />
        <Input 
            required
            className="max-w-lg" 
            name="StartingPrice" 
            step="0.01"
            type="number"
            placeholder="Starting Price" 
        />
        <Input type="file" name="file"></Input>
        <Button className="self-end" type="submit">Post Item</Button>
      </form>

    </main>
  );
}