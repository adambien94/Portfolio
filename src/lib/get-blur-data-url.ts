import { imageBlurData } from "@/data/image-blur-data";
import { getImagePath } from "@/lib/get-versioned-image-src";

export function getBlurDataURL(src: string): string | undefined {
  return imageBlurData[getImagePath(src)];
}
