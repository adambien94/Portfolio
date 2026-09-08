import { imageDimensions } from "@/data/image-blur-data";
import type { LightboxItem } from "@/components/editorial-lightbox/lightbox";
import type { ProjectDetail, ProjectScreenshot } from "@/data/projects/types";
import { getImagePath } from "@/lib/get-versioned-image-src";
import { getVersionedImageSrc } from "@/lib/get-versioned-image-src";

function toLightboxItem(image: ProjectScreenshot): LightboxItem {
  const imagePath = getImagePath(image.src);
  const dimensions = imageDimensions[imagePath] ?? { width: 1920, height: 1080 };

  return {
    id: image.src,
    src: getVersionedImageSrc(image.src),
    alt: image.alt,
    caption: image.caption ?? image.alt,
    width: dimensions.width,
    height: dimensions.height,
  };
}

export function collectProjectLightboxItems(project: ProjectDetail): LightboxItem[] {
  const items: LightboxItem[] = [];

  if (project.heroImage) {
    items.push(toLightboxItem(project.heroImage));
  }

  for (const section of project.sections) {
    if (section.images?.length) {
      for (const image of section.images) {
        items.push(toLightboxItem(image));
      }
    } else if (section.image) {
      items.push(toLightboxItem(section.image));
    }
  }

  return items;
}

export function createLightboxIndexMap(items: LightboxItem[]): Map<string, number> {
  return new Map(items.map((item, index) => [String(item.id), index]));
}
