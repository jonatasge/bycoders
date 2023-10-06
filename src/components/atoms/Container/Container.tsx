export type ContainerProps = JSX.IntrinsicElements["div"];

export const Container = ({ className, ...props }: ContainerProps) => {
  return <div className={`Container ${className || ""}`} {...props} />;
};
