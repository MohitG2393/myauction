import { env } from "@/env";


export function getImageUrl(fileKey: string): string {
    return `${env.NEXT_PUBLIC_BUCKET_URL}/${fileKey}`;
  }