import { imageBlurData } from "@/data/image-blur-data";

export function getBlurDataURL(src: string): string | undefined {
  return imageBlurData[src];
}
