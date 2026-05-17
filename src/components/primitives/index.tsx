import * as React from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: Tag;
  level?: "xl" | "lg" | "md" | "italic";
  children: React.ReactNode;
}

export function Heading({ as = "h2", level = "lg", className = "", children, ...rest }: HeadingProps) {
  const cls =
    level === "xl" ? "h-display-xl" :
    level === "md" ? "h-display-md" :
    level === "italic" ? "h-serif-italic" : "h-display-lg";
  return React.createElement(
    as,
    { className: `${cls} ${className}`.trim(), ...rest },
    children
  );
}

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  withRule?: boolean;
  muted?: boolean;
}

export function Eyebrow({ children, withRule, muted, className = "", ...rest }: EyebrowProps) {
  return (
    <span className={`eyebrow ${muted ? "eyebrow--muted" : ""} ${className}`.trim()} {...rest}>
      {children}
      {withRule ? <span className="hairline hairline--short" aria-hidden style={{ marginLeft: "0.8em" }} /> : null}
    </span>
  );
}

interface HairlineProps extends React.HTMLAttributes<HTMLHRElement> {
  width?: "full" | "short";
  strong?: boolean;
}

export function HairlineRule({ width = "full", strong, className = "", ...rest }: HairlineProps) {
  return (
    <hr
      className={`hairline ${width === "short" ? "hairline--short" : ""} ${strong ? "hairline--strong" : ""} ${className}`.trim()}
      {...rest}
    />
  );
}

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  as?: "a" | "button";
  children: React.ReactNode;
}

export function Button({ variant = "secondary", as = "a", className = "", children, href, ...rest }: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();
  if (as === "button") {
    const buttonProps = rest as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={cls} {...buttonProps}>
        {children}
      </button>
    );
  }
  return (
    <a className={cls} href={href} {...rest}>
      {children}
    </a>
  );
}

interface TagChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export function TagChip({ active, className = "", children, ...rest }: TagChipProps) {
  return (
    <button
      className={`tag ${active ? "tag--active" : ""} ${className}`.trim()}
      aria-pressed={active}
      {...rest}
    >
      {children}
    </button>
  );
}

interface RegistrationMarkProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
}

export function RegistrationMark({ size = 18, className = "", ...rest }: RegistrationMarkProps) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" aria-hidden
      className={className}
      {...rest}
    >
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

interface SectionWrapProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  ruleTop?: boolean;
  ruleBottom?: boolean;
  snug?: boolean;
}

export function Section({ children, ruleTop, ruleBottom, snug, className = "", ...rest }: SectionWrapProps) {
  return (
    <section className={`section ${snug ? "section--snug" : ""} ${className}`.trim()} {...rest}>
      <div className="container">
        {ruleTop ? <HairlineRule style={{ marginBottom: "3rem" }} /> : null}
        {children}
        {ruleBottom ? <HairlineRule style={{ marginTop: "3rem" }} /> : null}
      </div>
    </section>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`container ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}

export function PullQuote({ children, attribution, className = "" }: PullQuoteProps) {
  return (
    <blockquote className={`pullquote ${className}`.trim()}>
      {children}
      {attribution ? <div className="pullquote__attr">— {attribution}</div> : null}
    </blockquote>
  );
}
