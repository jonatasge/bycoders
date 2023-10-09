import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { IconButton } from "@/components/atoms";

export type HeaderRootProps = JSX.IntrinsicElements["header"] & {
  showBackButton?: boolean;
};

export const HeaderRoot = ({
  children,
  className,
  showBackButton = true,
  ...props
}: HeaderRootProps) => {
  const navigate = useNavigate();

  return (
    <header className={`HeaderRoot ${className || ""}`} {...props}>
      {showBackButton && (
        <IconButton onClick={() => navigate(-1)}>
          <MdArrowBack />
        </IconButton>
      )}

      {children}
    </header>
  );
};
