import {
  Avatar,
  AvatarProps,
  Skeleton,
  Title,
  TitleProps,
} from "@/components/atoms";

export type OverviewAsideProps = Omit<JSX.IntrinsicElements["div"], "title"> & {
  loading?: boolean;
  avatar?: AvatarProps;
  title?: TitleProps;
};

export const OverviewAside = ({
  avatar,
  children,
  className,
  loading,
  title,
  ...props
}: OverviewAsideProps) => {
  return (
    <div className={`OverviewAside ${className || ""}`} {...props}>
      {loading ? (
        <Skeleton type="Avatar" className={avatar?.className} />
      ) : (
        <Avatar {...avatar} />
      )}
      <Title {...title} />

      {children}
    </div>
  );
};
