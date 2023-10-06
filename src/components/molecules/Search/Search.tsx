import { Button, ButtonProps, Input, InputProps } from "@/components/atoms";
import { getFormValues } from "@/utils/form";
import { FormEvent } from "react";
import { MdSearch } from "react-icons/md";

export type SearchProps = Omit<JSX.IntrinsicElements["form"], "onSubmit"> & {
  button?: ButtonProps;
  input?: InputProps;
  onSubmit?: (search: string) => void;
};

export const Search = ({
  className,

  input,
  button,
  onSubmit,
  ...props
}: SearchProps) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = getFormValues(e.target as HTMLFormElement);
    onSubmit?.(values.search as string);
  };

  return (
    <form
      className={`Search ${className || ""}`}
      onSubmit={handleOnSubmit}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Input
          id="search"
          name="search"
          required={true}
          before={<MdSearch />}
          {...input}
        />
        <Button type="submit" {...button}>
          Pesquisar
        </Button>
      </div>
    </form>
  );
};
