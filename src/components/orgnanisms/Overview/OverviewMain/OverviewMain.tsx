export type OverviewMainProps = JSX.IntrinsicElements["div"];

export const OverviewMain = ({ className, ...props }: OverviewMainProps) => {
  return <div className={`OverviewMain ${className || ""}`} {...props} />;
};
