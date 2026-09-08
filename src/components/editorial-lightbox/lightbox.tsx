"use client";

/**
 * Editorial lightbox — design-system package entry (copy with lightbox.css).
 *
 * Article figure viewer: near-black surface, typography-forward caption block,
 * counter top-left, ghost controls, and pinch/double-click zoom.
 */

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "lucide-react";
import * as React from "react";
import * as RamkaLightbox from "@ramka/react/lightbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "./lightbox.css";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const controlIconClass = "size-5";

const LightboxTooltipPortalContext = React.createContext<
  React.RefObject<HTMLDivElement | null> | null
>(null);

function LightboxControlTooltip({
  label,
  side = "bottom",
  children,
}: {
  label: string;
  side?: React.ComponentProps<typeof TooltipContent>["side"];
  children: React.ReactElement;
}) {
  const container = React.useContext(LightboxTooltipPortalContext);

  return (
    <Tooltip>
      <TooltipTrigger render={children} />
      <TooltipContent side={side} container={container}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export type LightboxItem = {
  id?: string | number;
  src: string;
  thumb?: string;
  alt: string;
  caption?: string;
  credit?: string;
  width: number;
  height: number;
};

function Root(props: React.ComponentProps<typeof RamkaLightbox.Root>) {
  return <RamkaLightbox.Root {...props} />;
}

function Trigger({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Trigger>) {
  return <RamkaLightbox.Trigger className={cx("elb-trigger", className)} {...props} />;
}

function Portal({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Portal>) {
  return <RamkaLightbox.Portal className={cx("elb-portal", className)} {...props} />;
}

function Backdrop({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Backdrop>) {
  return <RamkaLightbox.Backdrop className={cx("elb-backdrop", className)} {...props} />;
}

const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RamkaLightbox.Content>
>(function Content({ className, ...props }, ref) {
  return (
    <RamkaLightbox.Content
      ref={ref}
      className={cx("elb-content", className)}
      {...props}
    />
  );
});

function Close({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.Close>) {
  return (
    <RamkaLightbox.Close className={cx("elb-control", className)} aria-label="Close" {...props}>
      {children ?? <X className={controlIconClass} aria-hidden />}
    </RamkaLightbox.Close>
  );
}

function Slides({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Slides>) {
  return <RamkaLightbox.Slides className={cx("elb-slides", className)} {...props} />;
}

function Slide({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Slide>) {
  return <RamkaLightbox.Slide className={cx("elb-slide", className)} {...props} />;
}

function Item({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Item>) {
  return <RamkaLightbox.Item className={cx("elb-item", className)} {...props} />;
}

function Media({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Media>) {
  return <RamkaLightbox.Media className={cx("elb-media", className)} {...props} />;
}

function Zoom({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Zoom>) {
  return <RamkaLightbox.Zoom className={cx("elb-zoom", className)} {...props} />;
}

function ZoomIn({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.ZoomIn>) {
  return (
    <RamkaLightbox.ZoomIn className={cx("elb-control", className)} aria-label="Zoom in" {...props}>
      {children ?? <ZoomInIcon className={controlIconClass} aria-hidden />}
    </RamkaLightbox.ZoomIn>
  );
}

function ZoomOut({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.ZoomOut>) {
  return (
    <RamkaLightbox.ZoomOut className={cx("elb-control", className)} aria-label="Zoom out" {...props}>
      {children ?? <ZoomOutIcon className={controlIconClass} aria-hidden />}
    </RamkaLightbox.ZoomOut>
  );
}

function Counter({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Counter>) {
  return <RamkaLightbox.Counter className={cx("elb-counter", className)} {...props} />;
}

function Caption({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Caption>) {
  return <RamkaLightbox.Caption className={cx("elb-caption", className)} {...props} />;
}

function Previous({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.Previous>) {
  return (
    <RamkaLightbox.Previous
      className={cx("elb-control", "elb-nav", "elb-nav-prev", className)}
      aria-label="Previous image"
      {...props}
    >
      {children ?? <ChevronLeft className={controlIconClass} aria-hidden />}
    </RamkaLightbox.Previous>
  );
}

function Next({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.Next>) {
  return (
    <RamkaLightbox.Next
      className={cx("elb-control", "elb-nav", "elb-nav-next", className)}
      aria-label="Next image"
      {...props}
    >
      {children ?? <ChevronRight className={controlIconClass} aria-hidden />}
    </RamkaLightbox.Next>
  );
}

function figureCaption(item: LightboxItem): React.ReactNode {
  if (!item.caption && !item.credit) return undefined;

  return (
    <>
      {item.caption ? <span className="elb-caption-text">{item.caption}</span> : null}
      {item.credit ? <span className="elb-credit">{item.credit}</span> : null}
    </>
  );
}

function Gallery({ items, ariaLabel }: { items: LightboxItem[]; ariaLabel: string }) {
  const multiple = items.length > 1;
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <Backdrop />
      <LightboxTooltipPortalContext.Provider value={contentRef}>
        <Content ref={contentRef} aria-label={ariaLabel}>
        <Slides
          aria-label="Article photographs"
          aria-roledescription="carousel"
          preload={2}
        >
          {items.map((item, i) => (
            <Slide key={item.id ?? i}>
              <Item
                index={i}
                caption={figureCaption(item)}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
              >
                <Zoom>
                  <Media width={item.width} height={item.height}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes={`${item.width}px`}
                      quality={100}
                      priority
                      draggable={false}
                    />
                  </Media>
                </Zoom>
              </Item>
            </Slide>
          ))}
        </Slides>

        <div className={cx("elb-top", "elb-chrome-gesture-hide", "elb-chrome-zoom-hide")}>
          {multiple ? <Counter>{({ current, total }) => `${current} / ${total}`}</Counter> : <span />}
          <div className="elb-top-controls">
            <LightboxControlTooltip label="Zoom out">
              <ZoomOut />
            </LightboxControlTooltip>
            <LightboxControlTooltip label="Zoom in">
              <ZoomIn />
            </LightboxControlTooltip>
            <LightboxControlTooltip label="Close">
              <Close />
            </LightboxControlTooltip>
          </div>
        </div>

        {multiple ? (
          <>
            <LightboxControlTooltip label="Previous image" side="right">
              <Previous className="elb-chrome-gesture-hide" />
            </LightboxControlTooltip>
            <LightboxControlTooltip label="Next image" side="left">
              <Next className="elb-chrome-gesture-hide" />
            </LightboxControlTooltip>
          </>
        ) : null}

        <div className={cx("elb-bottom", "elb-chrome-gesture-hide", "elb-chrome-zoom-hide")}>
          <Caption />
        </div>
        </Content>
      </LightboxTooltipPortalContext.Provider>
    </Portal>
  );
}

export const Lightbox = {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Content,
  Close,
  Slides,
  Slide,
  Item,
  Media,
  Zoom,
  ZoomIn,
  ZoomOut,
  Counter,
  Caption,
  Previous,
  Next,
  Gallery,
};
