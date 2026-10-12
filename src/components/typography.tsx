import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant =
  "display" | "title" | "body" | "label" | "micro" | "number" | "poster";
type Props<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Typography<T extends ElementType = "span">({
  as,
  variant = "body",
  className = "",
  children,
  ...props
}: Props<T>) {
  const Tag = as || "span";
  return (
    <Tag className={`type-${variant} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
