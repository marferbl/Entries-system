import React from "react";
import Box from "@mui/material/Box";

function AvatarComponent({ url, w, h, connected }) {
  return (
    <Box sx={{ paddingTop: 1, position: "relative " }}>
      <img src={url} style={{ width: w, height: h }} />
      <Box
        sx={{
          height: 10,
          width: 10,
          background: connected ? "#5ebea3" : "#ff9984",
          borderRadius: "100%",
          position: "absolute",
          top: "45%",
          right: "-10%",
        }}
      />
    </Box>
  );
}

export default AvatarComponent;
