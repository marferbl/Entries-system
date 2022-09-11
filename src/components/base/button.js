import React from "react";
import Button from "@mui/material/Button";

function ButtonComponent({ color, bg, onClick, children }) {
  return (
    <Button
      sx={{
        color: color,
        background: bg,
        borderRadius: 20,
        minWidth: 120,
        textTransform: "none",
        marginX: 1,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
