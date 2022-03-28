import { Box, Card, CardActionArea } from '@mui/material';
import React from "react";
import ReactPlayer from 'react-player'
//import Paper from '@mui/material/Paper';

import { Grid } from '@material-ui/core';

export const VideoPlayer = () => {

  return (

    <Box
      gap={2}
      marginX={1}
      padding={3}


    >

      <Grid lg={12} item container spacing={2}>

        <Card sx={{ maxWidth: 800 }} >

          <CardActionArea>
            <ReactPlayer url='https://www.youtube.com/watch?v=HGny-Vz1ur8' />
          </CardActionArea>
        </Card>


      </Grid>


    </Box>



  );
};