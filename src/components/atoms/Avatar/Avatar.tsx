import avatar from "@/assets/avatar.svg";

export type AvatarProps = Omit<
  JSX.IntrinsicElements["img"],
  "height" | "width"
>;

export const Avatar = ({
  alt = "Avatar",
  className,
  src,
  ...props
}: AvatarProps) => {
  return (
    <img
      alt={alt}
      className={`Avatar ${src ? '' : 'bg-white'} ${className || ""}`}
      src={src || avatar}
      {...props}
    />
  );
};
