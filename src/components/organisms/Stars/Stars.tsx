import { Data, DataProps } from "@/components/molecules";
import { formatNumber } from "@/utils/data";
import { MdStarOutline } from "react-icons/md";

export type StartsProps = Omit<DataProps, "label">;

export const Stars = ({ children, className, ...props }: StartsProps) => {
  return (
    <Data
      className={`Stars ${className || ""}`}
      label={<MdStarOutline />}
      {...props}
    >
      {formatNumber((children !== undefined ? children : "") as string)}
    </Data>
  );
};
