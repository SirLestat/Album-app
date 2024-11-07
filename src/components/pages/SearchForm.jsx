import { TextField, useTheme } from "@mui/material";
export const SearchForm = ({ onChange, value }) => {
  const theme = useTheme();
  return (
    <TextField
      sx={{
        borderRadius: 2,
        backgroundColor: "#F5F5F5",
        "& .MuiInputBase-input": {
          display: "flex",
          alignItems: "center",
          padding: "10px 14px",
          color: theme.palette.text.secondary,
        },
      }}
      autoComplete="off"
      fullWidth
      onChange={onChange}
      placeholder="Buscar usuario"
      value={value}
      variant="filled"
    />
  );
};
