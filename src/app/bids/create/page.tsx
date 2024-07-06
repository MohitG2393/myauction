import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "./actions";

export default async function CreatePage() {

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-8">
        Post an Item
      </h1>
      <form 
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        action={createItemAction}
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
            name="MaximumPrice" 
            step="0.01"
            type="number"
            placeholder="Maximum Price or Retail price" 
        />
        <Button className="self-end" type="submit">Post Item</Button>
      </form>

    </main>
  );
}