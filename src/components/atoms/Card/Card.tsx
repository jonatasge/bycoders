export type CardProps = JSX.IntrinsicElements["div"];

export const Card = ({ className, ...props }: CardProps) => {
  return <div className={`Card ${className || ''}`} {...props} />;
};
