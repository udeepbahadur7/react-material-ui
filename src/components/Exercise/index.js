import React from "react";
import { Grid, Paper } from "@material-ui/core";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
const styles = {
  Paper: {
    marginTop: 10,
    marginBttom: 10,
    padding: 20
  }
};
export default props => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles} />
        <Paper style={styles.Paper}>Left pane</Paper>
      </Grid>
      <Grid item sm>
        <RightPane styles={styles} />
        <Paper style={styles.Paper}>Right pane</Paper>
      </Grid>
    </Grid>
  );
};
