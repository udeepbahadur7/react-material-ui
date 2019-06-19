import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle2" color="inherit">
          display 4
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
