import { ReactNode, useRef } from "react";

export type InputProps = JSX.IntrinsicElements["input"] & {
  before?: ReactNode;
  after?: ReactNode;
};

export const Input = ({
  after,
  before,
  className = "transition transition-bg-color",
  ...props
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`Input ${className || ""}`}
      onClick={() => ref.current?.focus()}
    >
      {before}
      <input ref={ref} {...props} />
      {after}
    </div>
  );
};
