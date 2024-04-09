import { AutoCompletePaper, SearchBarAutoComplete } from "./styled";

import { List, ListItem, TextField } from "@mui/material";

export const SearchBar = () => {
  return (
    <SearchBarAutoComplete
      size="small"
      PaperComponent={({ children }) => (
        <AutoCompletePaper>
          <List>{children}</List>
        </AutoCompletePaper>
      )}
      renderOption={(props, option: any) =>
        option && (
          <ListItem sx={{ height: "45px" }} {...props}>
            {option.label}
          </ListItem>
        )
      }
      options={[
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
      ]}
      renderInput={params => <TextField {...params} placeholder="Search...." />}
    />
  );
};
