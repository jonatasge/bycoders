import { Card, CardProps } from "@/components/atoms";
import { Link, LinkProps } from "react-router-dom";

export type LinkCardProps = LinkProps & {
  card?: Omit<CardProps, "children">;
};

export const LinkCard = ({
  card,
  children,
  className,
  ...props
}: LinkCardProps) => {
  return (
    <Link className={`LinkCard ${className || ""}`} {...props}>
      <Card
        {...card}
        className={`transition transition-bg-color ${card?.className || ""}`}
      >
        {children}
      </Card>
    </Link>
  );
};
