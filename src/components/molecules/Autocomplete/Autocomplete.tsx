import { useCombobox } from "downshift";
import React, { useState } from "react";

import { Input, InputProps, List } from "@/components/atoms";

export type AutocompleteProps = Omit<
  React.ComponentPropsWithRef<"div">,
  "children"
> & {
  items?: string[];
  input?: Omit<InputProps, "innerRef">;
};

export const Autocomplete = ({
  input,
  items = [],
  ...props
}: AutocompleteProps) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const {
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    isOpen,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      const filteredItems = items.filter(
        (item) => !inputValue || item.includes(inputValue)
      );
      setFilteredItems(filteredItems);
    },
    items: filteredItems,
  });

  const handleRef = ({
    ref,
    ...props
  }: React.ComponentPropsWithRef<React.ElementType>) => {
    return { ...props, innerRef: ref };
  };

  return (
    <div
      className={`Autocomplete ${
        isOpen && !!filteredItems.length ? "open" : ""
      }`}
      {...props}
    >
      <Input {...input} {...handleRef(getInputProps())} />

      <List.Root className="text-left" {...handleRef(getMenuProps())}>
        {isOpen && filteredItems.length
          ? filteredItems.map((item, index) => (
              <List.Item
                className={`${
                  highlightedIndex === index ? "highlighted" : ""
                } ${selectedItem === item ? "selected" : ""}`}
                key={index}
                {...getItemProps({ index, item })}
              >
                {item}
              </List.Item>
            ))
          : null}
      </List.Root>
    </div>
  );
};
