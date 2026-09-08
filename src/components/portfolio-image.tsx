import Image, { type ImageProps } from "next/image";
import { getBlurDataURL } from "@/lib/get-blur-data-url";
import { getVersionedImageSrc } from "@/lib/get-versioned-image-src";

type PortfolioImageProps = Omit<ImageProps, "placeholder" | "blurDataURL">;

export function PortfolioImage({ src, ...props }: PortfolioImageProps) {
  const versionedSrc = typeof src === "string" ? getVersionedImageSrc(src) : src;
  const blurDataURL = typeof src === "string" ? getBlurDataURL(src) : undefined;

  return (
    <Image
      src={versionedSrc}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}
