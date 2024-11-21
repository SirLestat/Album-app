import { TextField, useTheme } from "@mui/material";
export const SearchForm = ({ onChange, value }) => {
  const theme = useTheme();
  return (
    <TextField
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",

        "& .MuiFilledInput-root": {
          borderRadius: "8px",

          "&.Mui-focused": {
            borderColor: "#rgba(42, 157, 143, 0)",
            backgroundColor: "rgba(42, 157, 143, 0.1)",
          },
        },
        "& .MuiInputBase-input": {
          color: "#FFF",
          padding: "15px 19px",
        },

        "& .MuiFilledInput-underline:before": {
          borderBottom: "disable",
        },
        "& .MuiFilledInput-underline:after": {
          borderBottom: "1px solid rgba(42, 157, 143, 2)",
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
