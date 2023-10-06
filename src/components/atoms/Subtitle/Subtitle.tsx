export type SubtitleProps = JSX.IntrinsicElements["h2"];

export const Subtitle = ({ className, ...props }: SubtitleProps) => {
  return <h2 className={`Subtitle ${className || ""}`} {...props} />;
};
