export type SkeletonProps = {
  className?: string;
  loading?: boolean;
  style?: JSX.IntrinsicElements["div"]["style"];
  type?: "Avatar" | "Block" | "Chip" | "Title" | "Subtitle" | "Text";
};

export const Skeleton = ({
  className,
  loading = true,
  style,
  type = "Block",
}: SkeletonProps) => {
  return (
    <div
      className={`Skeleton ${type === "Chip" ? "SkeletonChip" : type} ${
        loading ? "loading" : ""
      } ${className || ""}`}
    >
      <div style={style} />
    </div>
  );
};
