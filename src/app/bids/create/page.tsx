'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction, createUploadUrlAction } from "./actions";
import { pageTitleStlyes } from "@/app/styles";

export default function CreatePage() {

  return (
    <main className="space-y-8">
      <h1 className={pageTitleStlyes}>
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

          await fetch(uploadUrl, {
            method: "PUT",
            body: file,
          });


          const name = formData.get("name") as string;
          const StartingPrice = parseInt(
            formData.get("StartingPrice") as string
          );
          const StartingPriceInCents = Math.floor(StartingPrice * 100);

          await createItemAction({
            name,
            StartingPrice: StartingPriceInCents,
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