import { FormEvent } from "react";

import { Button, ButtonProps } from "@/components/atoms";
import { Autocomplete, AutocompleteProps } from "@/components/molecules";
import { getFormValues } from "@/utils/form";

export type SearchProps = Omit<JSX.IntrinsicElements["form"], "onSubmit"> & {
  autocomplete?: AutocompleteProps;
  button?: ButtonProps;
  onSubmit?: (search: string) => void;
};

export const Search = ({
  autocomplete,
  button,
  className,
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
        <Autocomplete
          {...autocomplete}
          input={{ type: "search", ...autocomplete?.input }}
        />

        <Button type="submit" {...button}>
          Pesquisar
        </Button>
      </div>
    </form>
  );
};
