type ListRootType = "ol" | "ul";

export type ListRootProps<T extends ListRootType = "ul"> =
  React.ComponentPropsWithRef<T> & {
    as?: "ol" | "ul";
  };

export const ListRoot = <T extends ListRootType = "ul">({
  as = "ul",
  className,
  ...props
}: ListRootProps<T>) => {
  const Component = as;
  return (
    <Component className={`List ${className || ""}`} {...(props as object)} />
  );
};
