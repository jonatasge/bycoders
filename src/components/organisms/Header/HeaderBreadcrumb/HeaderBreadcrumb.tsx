import { Avatar, AvatarProps, Breadcrumb, Skeleton } from "@/components/atoms";

export type HeaderBreadcrumbProps = JSX.IntrinsicElements["div"] & {
  avatar?: AvatarProps;
  loading?: boolean;
  showAvatar?: boolean;
};

export const HeaderBreadcrumb = ({
  avatar,
  children,
  className,
  loading = true,
  showAvatar = true,
  ...props
}: HeaderBreadcrumbProps) => {
  return (
    <div className={`HeaderBreadcrumb ${className || ""}`} {...props}>
      {showAvatar && loading ? (
        <Skeleton type="Avatar" />
      ) : (
        <Avatar {...avatar} />
      )}
      <Breadcrumb>{children}</Breadcrumb>
    </div>
  );
};
