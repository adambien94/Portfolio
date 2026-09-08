"use client";

/**
 * Editorial lightbox — design-system package entry (copy with lightbox.css).
 *
 * The viewer newsrooms use for article figures: a near-black surface in both
 * color schemes (photography reads best on dark), a typography-forward
 * caption + credit block under the media, a counter top-left, and ghost
 * controls. Keyboard-first; no zoom — this is a reading context, not an
 * inspection one (swipe / arrows to browse, pull down to dismiss).
 */

import Image from "next/image";
import * as React from "react";
import * as RamkaLightbox from "@ramka/react/lightbox";

import "./lightbox.css";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

function Content({ className, ...props }: React.ComponentProps<typeof RamkaLightbox.Content>) {
  return <RamkaLightbox.Content className={cx("elb-content", className)} {...props} />;
}

function Close({ className, children, ...props }: React.ComponentProps<typeof RamkaLightbox.Close>) {
  return (
    <RamkaLightbox.Close className={cx("elb-control", className)} aria-label="Close" {...props}>
      {children ?? <IconX />}
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
      {children ?? <IconChevronLeft />}
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
      {children ?? <IconChevronRight />}
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

  return (
    <Portal>
      <Backdrop />
      <Content aria-label={ariaLabel}>
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
                <Media width={item.width} height={item.height}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="100vw"
                    priority
                    draggable={false}
                  />
                </Media>
              </Item>
            </Slide>
          ))}
        </Slides>

        <div className={cx("elb-top", "elb-chrome-gesture-hide")}>
          {multiple ? <Counter>{({ current, total }) => `${current} / ${total}`}</Counter> : <span />}
          <Close />
        </div>

        {multiple ? (
          <>
            <Previous className="elb-chrome-gesture-hide" />
            <Next className="elb-chrome-gesture-hide" />
          </>
        ) : null}

        <div className={cx("elb-bottom", "elb-chrome-gesture-hide")}>
          <Caption />
        </div>
      </Content>
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
  Counter,
  Caption,
  Previous,
  Next,
  Gallery,
};
