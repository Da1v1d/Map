import styled from "@emotion/styled";
import { Backdrop, Box } from "@mui/material";

export const PopupBackdrop = styled(Backdrop)`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const PopupContent = styled(Box)`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5px;
  flex-direction: column;
`;
