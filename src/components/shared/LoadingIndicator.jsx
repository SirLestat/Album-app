import { LinearProgress, useTheme } from "@mui/material";

import Grid from "@mui/material/Grid2";

export const LoadingIndicator = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <LinearProgress
        sx={{
          backgroundColor: theme.palette.customColors.itemBackground,
          width: "50%",
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.customColors.buttonHover,
          },
        }}
      />
    </Grid>
  );
};
