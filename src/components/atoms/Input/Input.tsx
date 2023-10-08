import { ReactNode } from "react";

export type InputProps = JSX.IntrinsicElements["input"] & {
  before?: ReactNode;
  after?: ReactNode;
  innerRef?: React.RefObject<HTMLInputElement>;
};

export const Input = ({
  after,
  before,
  className = "transition transition-bg-color",
  innerRef,
  ...props
}: InputProps) => {
  return (
    <div
      className={`Input ${className || ""}`}
      onClick={() => innerRef?.current?.focus()}
    >
      {before}
      <input ref={innerRef} {...props} />
      {after}
    </div>
  );
};
