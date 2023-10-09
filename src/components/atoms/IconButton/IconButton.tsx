export type IconButtonProps = React.ComponentPropsWithRef<"button">;

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className="transition transition-bg-color cursor-pointer rounded inline-flex items-center justify-center outline"
      type="button"
      {...props}
    />
  );
};
