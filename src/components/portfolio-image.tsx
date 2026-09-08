import Image, { type ImageProps } from "next/image";
import { forwardRef } from "react";
import { getBlurDataURL } from "@/lib/get-blur-data-url";
import { getVersionedImageSrc } from "@/lib/get-versioned-image-src";

type PortfolioImageProps = Omit<ImageProps, "placeholder" | "blurDataURL">;

export const PortfolioImage = forwardRef<HTMLImageElement, PortfolioImageProps>(
  function PortfolioImage({ src, ...props }, ref) {
    const versionedSrc = typeof src === "string" ? getVersionedImageSrc(src) : src;
    const blurDataURL = typeof src === "string" ? getBlurDataURL(src) : undefined;

    return (
      <Image
        ref={ref}
        src={versionedSrc}
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
        {...props}
      />
    );
  },
);
