export type TitleProps = JSX.IntrinsicElements["h1"];

export const Title = ({ className, ...props }: TitleProps) => {
  return <h1 className={`Title ${className || ""}`} {...props} />;
};
