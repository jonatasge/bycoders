type ListRootType = "ol" | "ul";

export type ListRootProps<T extends ListRootType = "ul"> =
  React.ComponentPropsWithRef<T> & {
    as?: "ol" | "ul";
    innerRef?: React.RefObject<HTMLOListElement>;
  };

export const ListRoot = <T extends ListRootType = "ul">({
  as = "ul",
  className,
  innerRef,
  ...props
}: ListRootProps<T>) => {
  const Component = as;
  return (
    <Component
      ref={innerRef}
      className={`List ${className || ""}`}
      {...(props as object)}
    />
  );
};
