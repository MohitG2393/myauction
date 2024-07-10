import { pageTitleStlyes } from "@/app/syles";
import { Button } from "@/components/ui/button";
import { database } from "@/db/database"
import { bids, items } from "@/db/schema";
import { getItem } from '@/data-access/items'
import { formatToDollar } from "@/util/currency";
import { getImageUrl } from "@/util/file";
import { formatDistance } from "date-fns";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import { createBidAction } from "./actions";
import { getBidsForItem } from "@/data-access/bids";

function formatTimestamp(timestamp: Date) {
  return formatDistance(timestamp, new Date(), { addSuffix: true })
}

export default async function ItemPage({
  params: { itemId }
}: {
  params: { itemId: string };
})  {
  
  const item = await getItem(parseInt(itemId));
  
  if (!item) {
    return ( 
        <div className="space-y-8 flex flex-col items-center mt-12">
           <Image src="/package.svg" width="200" height="200" alt="Package" />
          <h1 className={pageTitleStlyes}>Item not found</h1>
          <p className="text-center">
            The item you are trying to view is invalid.<br/> 
            Please go back aand search for a different item
          </p>

          <Button asChild>
                <Link href={`/`}>View Auctions</Link>
            </Button>
        </div>
      );  
    }
  
    
    const allbids = await getBidsForItem(item.id);
    
    
    const hasBids = allbids.length > 0;
    
    return (
    <main className="space-y-8">
      <div className="flex gap-8">

      <div className="flex flex-col gap-6">
        <h1 className={pageTitleStlyes}><span className="font-normal">Auction for</span> {item.name}
        </h1>
        <Image
        className="rounded-xl"
        src={getImageUrl(item.fileKey)}
        alt={item.name}
        width={500}
        height={500}
        />
        <div className="text-xl space-y-4">
          
        <div>
            Current Bid {" "} 
            <span className="font-bold">
              ${(item.currentBid)}
            </span>
          </div>
          
          <div>
            Starting Price of {" "} 
            <span className="font-bold">
              ${(item.StartingPrice)}
            </span>
          </div>
          <div>Bid Interval  <span className="font-bold">
            ${(item.bidInterval)}
            </span>
          </div>
        </div>
      </div>
        
        <div className="space-y-6 flex-1">
          <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Current Bids</h2>
          <form action={createBidAction.bind(null, item.id)}>
          <Button>Place a bid</Button>
          </form>
          </div>

      {hasBids ? (
            <ul className="space-y-4">
              {allbids.map((bid) => (
                <li key={bid.id} className="bg-gray-100 rounded-xl p-8">
                  <div className="flex-gap-4">
                    <div>
                    <span className="font-bold">${bid.amount}</span> by{" "}
                    <span className="font-bold">${bid.user.name}</span>
                    </div>
                    <div className="">{formatTimestamp(bid.timestamp)}</div>
                  </div>
                </li>
              ))}
            </ul>
      ):(
        <div className="flex flex-col items-center gap-8 bg-gray-200 rounded-xl p-16">
         <Image src="/package.svg" width="200" height="200" alt="Package" />
          <h2 className="text-2xl font-bold">No bids yet</h2>
          <form action={createBidAction.bind(null, item.id)}>
          <Button>Place a bid</Button>
          </form>
        </div>
      )}

        
        </div>
    </div>
     

    </main>
  );
}