export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`Button transition transition-bg-color ${className || ""}`}
      {...props}
    />
  );
};
