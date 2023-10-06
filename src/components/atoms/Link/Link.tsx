/* eslint-disable @typescript-eslint/no-explicit-any */
export type LinkProps = JSX.IntrinsicElements["a"] & {
  as?: keyof JSX.IntrinsicElements;
};

export const Link = ({ as = "a", className, ...props }: LinkProps) => {
  const As = as as any;
  return <As className={`Link ${className || ""}`} {...props} />;
};
