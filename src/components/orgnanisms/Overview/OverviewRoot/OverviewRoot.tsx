export type OverviewRootProps = JSX.IntrinsicElements["div"];

export const OverviewRoot = ({ className, ...props }: OverviewRootProps) => {
  return <div className={`OverviewRoot ${className || ""}`} {...props} />;
};
