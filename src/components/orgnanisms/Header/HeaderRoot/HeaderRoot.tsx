import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
        <button
          className="transition transition-bg-color cursor-pointer rounded inline-flex items-center justify-center"
          onClick={() => navigate(-1)}
          type="button"
        >
          <MdArrowBack />
        </button>
      )}

      {children}
    </header>
  );
};
