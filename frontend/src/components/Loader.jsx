import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background:
            "radial-gradient(farthest-side,#5acccc 94%,#0000) top/9px 9px no-repeat, conic-gradient(#0000 30%,#5acccc)",
          WebkitMask:
            "radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0)",
          animation: "spinner-c7wet2 1s infinite linear",
          "@keyframes spinner-c7wet2": {
            "100%": {
              transform: "rotate(1turn)",
            },
          },
        }}
      />
    </Box>
  );
};

export default Loader;
