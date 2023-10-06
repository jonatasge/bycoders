export type LabelProps = JSX.IntrinsicElements["label"];

export const Label = ({ className, ...props }: LabelProps) => {
  return <label className={`Label ${className || ''}`} {...props} />;
};
