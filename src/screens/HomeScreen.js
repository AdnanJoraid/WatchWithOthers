import React from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {Link} from 'react-router-dom'

function HomeScreen() {
  return (
    <Grid container spacing={2} style={{ padding: 350 }}>
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          WatchWithOthers
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" to='/create' component={Link} >Create a Room</Button>
          <Button color="secondary">Join a Room</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
