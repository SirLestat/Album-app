import { Box, TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderRadius: 3,
        pt:"40px"
      }}
    >
      <form>
        <TextField
          sx={{
            borderRadius: 3,
            backgroundColor: "#FFF",
            '& > :not(style)': {width: '50ch' }
          }}
          variant="filled"
          placeholder="Buscar usuario"
          fullWidth
        ></TextField>
      </form>
    </Box>
  );
}
