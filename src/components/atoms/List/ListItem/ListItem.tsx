export type ListItemProps = React.ComponentPropsWithRef<"li">;

export const ListItem = ({ className, ...props }: ListItemProps) => {
  return <li className={`ListItem ${className || ""}`} {...props} />;
};
