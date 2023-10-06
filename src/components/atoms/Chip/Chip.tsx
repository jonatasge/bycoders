export type ChipProps = JSX.IntrinsicElements["span"];

export const Chip = ({ className, ...props }: ChipProps) => {
  return <span className={`Chip ${className || ""}`} {...props} />;
};
