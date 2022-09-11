import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "./icon";
import Box from "@mui/material/Box";

export default function SubMenu({ children }) {
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
        sx={{ textTransform: "none", color: "inherit", padding: 0, margin: 0 }}
      >
        {children}
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
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "none",
          horizontal: "right",
        }}
      >
        {["Sesame1", "Sesame2"].map((elm, index) => (
          <MenuItem
            sx={{
              borderBottom: "1px solid #e7e7e7",
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                minWidth: 250,
                textAlign: "center",
                justifyContent: "space-between",
                paddingX: 4,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: 30,
                  width: 50,
                  background: "#e7e7e7",
                  borderRadius: "100%",
                  paddingTop: 1,
                  border: "1px solid gray",
                }}
              >
                {`S${index + 1}`}
              </Box>
              <Box sx={{ textAlign: "left", width: "100%", marginX: 2 }}>
                <Box>
                  <strong>{elm} </strong>
                  Kelly Pierce
                </Box>
                <Box>Hoy llevas 00.00</Box>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
