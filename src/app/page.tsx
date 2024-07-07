import { auth } from "@/auth";
import { database } from "@/db/database";
import { env } from "@/env";
import { getImageUrl } from "@/util/file";
import Image from "next/image";
import { ItemCard } from "./item-card";

export default async function HomePage() {
  const session = await auth();

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-8">
      Active Bids
      </h1>
        <div className="grid grid-cols-4 gap-8">
      {allItems.map((item) => (<ItemCard key={item.id} item={item} />))}
      </div>
    </main>
  );
}