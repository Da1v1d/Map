import styled from "@emotion/styled";
import { Autocomplete, Paper } from "@mui/material";

export const SearchBarAutoComplete = styled(Autocomplete)`
  position: absolute;
  z-index: 555;
  background: white;
  top: 1%;
  left: 60px;
  height: 50px;
  width: 420px;
  border-radius: 10px;
  border: none;
  .MuiInputBase-root {
    border-radius: 10px;
    height: 100%;
    color: black;
  }
  .MuiTextField-root {
    height: 100%;
    border: none;
    outline: none;
  }
  .MuiAutocomplete-inputFocused {
    .MuiOutlinedInput-notchedOutline {
      border-width: none;
    }
  }
`;

export const AutoCompletePaper = styled(Paper)`
  margin-top: 10px;
  animation: animation 0.15s linear;
  transition: all 1s linear;
  @keyframes animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
