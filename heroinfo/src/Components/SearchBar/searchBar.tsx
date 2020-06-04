import React from "react";

interface SearchProps<A> {
  name: string;
  value: A;
  onChange: (e: React.ChangeEvent<any>) => void;
  [otherProps: string]: any;
}

export const SearchBar = (props: SearchProps<string>) => {
  return (
    <div className="searchBar">
      <input className="searchinput" type="text" id={props.name} {...props} />
    </div>
  );
};
