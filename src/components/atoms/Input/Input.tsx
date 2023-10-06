import { ReactNode, useRef } from "react";

export type InputProps = JSX.IntrinsicElements["input"] & {
  before?: ReactNode;
  after?: ReactNode;
};

export const Input = ({ after, before, className, ...props }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`Input transition transition-bg-color ${className || ""}`}
      onClick={() => ref.current?.focus()}
    >
      {before}
      <input ref={ref} {...props} />
      {after}
    </div>
  );
};
