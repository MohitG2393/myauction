import { Item } from "@/db/schema";
import { getImageUrl } from "@/util/file";
import Image from "next/image";


export function ItemCard({item}: {item: Item}) {
    return (
        <div key={item.id} className="border p-8 rounded-xl">
        <Image
        src={getImageUrl(item.fileKey)}
        alt={item.name}
        width={200}
        height={200}
        />
        {item.name}
        
        Starting Price: ₹{item.StartingPrice / 100}
        </div>
    )
}