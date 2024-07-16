import { Button } from "@/components/ui/button";
import { Item } from "@/db/schema";
import { isBidOver } from "@/util/bids";
import { formatToDollar } from "@/util/currency";
import { getImageUrl } from "@/util/file";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export function ItemCard({ item }: { item: Item }) {
  return (
    <div key={item.id} className="border p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center mb-4">
        <Image
          src={getImageUrl(item.fileKey)}
          alt={item.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-lg text-gray-600 mb-2">
        Starting price: ${formatToDollar(item.StartingPrice)}
      </p>
      {isBidOver(item) ? (
        <p className="text-lg text-red-500 mb-2">Bidding is Over</p>
      ) : (
        <p className="text-lg text-gray-600 mb-2">
          Ends On: {format(item.endDate, "eeee M/dd/yy")}
        </p>
      )}
      <Button asChild variant={isBidOver(item) ? "outline" : "default"} className="w-full">
        <Link href={`/bids/${item.id}`}>
          {isBidOver(item) ? "View Bid" : "Place Bid"}
        </Link>
      </Button>
    </div>
  );
}
