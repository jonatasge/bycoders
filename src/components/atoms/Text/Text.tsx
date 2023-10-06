export type TextProps = JSX.IntrinsicElements["p"];

export const Text = ({ className, ...props }: TextProps) => {
  return <p className={`Text ${className || ""}`} {...props} />;
};
