import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "./icon";
import Box from "@mui/material/Box";
import SubMenu from "./sub-menu";

export default function BasicMenu({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ borderRadius: 15, padding: 0 }}
      >
        <SubMenu>
          <MenuItem sx={{ borderBottom: "1px solid #e7e7e7", padding: 2 }}>
            <Box sx={{ minWidth: 250, textAlign: "center", position: "relative" }}>
              <Box sx={{ position: "absolute", top: 0, left: 0 }}>{"<"}</Box>
              Mis cuentas
            </Box>
          </MenuItem>
        </SubMenu>
        <MenuItem sx={{ borderBottom: "1px solid #e7e7e7", padding: 2 }}>
          <Box sx={{ minWidth: 250, textAlign: "center" }}>Vista de empleado</Box>
        </MenuItem>
        <MenuItem sx={{ borderBottom: "1px solid #e7e7e7", padding: 2 }}>
          <Box sx={{ minWidth: 250, textAlign: "center" }}>Mi perfil</Box>
        </MenuItem>
        <MenuItem sx={{ padding: 2 }}>
          <Box sx={{ minWidth: 250, textAlign: "center" }}>Cerrar sesión </Box>
        </MenuItem>
      </Menu>
    </div>
  );
}
