import styled from "@emotion/styled";
import { Backdrop, Box, Typography } from "@mui/material";

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

export const PopupTypography = styled(Typography)`
  font-weight: 700;
`;
