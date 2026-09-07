import Image, { type ImageProps } from "next/image";
import { getBlurDataURL } from "@/lib/get-blur-data-url";

type PortfolioImageProps = Omit<ImageProps, "placeholder" | "blurDataURL">;

export function PortfolioImage({ src, ...props }: PortfolioImageProps) {
  const blurDataURL = typeof src === "string" ? getBlurDataURL(src) : undefined;

  return (
    <Image
      src={src}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}
