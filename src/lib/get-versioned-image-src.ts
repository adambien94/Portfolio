import { imageVersions } from "@/data/image-blur-data";

export function getImagePath(src: string): string {
  return src.split("?")[0] ?? src;
}

export function getVersionedImageSrc(src: string): string {
  const imagePath = getImagePath(src);
  const version = imageVersions[imagePath];

  if (!version) {
    return src;
  }

  return `${imagePath}?v=${version}`;
}
