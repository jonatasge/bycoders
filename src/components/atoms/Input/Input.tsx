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
  const inputFocus = () => {
    const query = props.id || props.name;
    if (query) document.getElementById(query)?.focus();
  };

  return (
    <div className={`Input ${className || ""}`} onClick={inputFocus}>
      {before}
      <input ref={innerRef} {...props} />
      {after}
    </div>
  );
};
