
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Typography } from '@mui/material';
//import Paper from '@mui/material/Paper';

import { Grid } from '@material-ui/core';


export const CardBoxRecheios = () => {


  return (

    <Box
      gap={1}
      marginX={1}
      padding={3}

    >
      <Typography marginX={1} variant="h5" component="h5">
        Nossos Recheios
      </Typography>

      <br></br>

      <Grid justifyContent="center" lg={12} item container spacing={2}>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://hersheys.vteximg.com.br/arquivos/ids/156302-292-292/KIT_4010301_V44.jpg?v=637498715585970000"
                alt="Hershey's"
              />
            </CardActionArea>
          </Card>

        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://m.media-amazon.com/images/I/614qQSTXE7L._AC_SL1500_.jpg"
                alt="Oreo"
              />
            </CardActionArea>
          </Card>

        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://1.bp.blogspot.com/-2SFctBTopeE/XfwnnlhL8SI/AAAAAAABv4E/99dQk5Ns5KkL-7fJox-LudorTNhE4KwDACLcBGAsYHQ/s1600/kit%2B2.jpg"
                alt="kitKat"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://carrefourbr.vtexassets.com/arquivos/ids/15399843-800-auto?v=637529068739530000&width=800&height=auto&aspect=true"
                alt="BomBom"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://1.bp.blogspot.com/-n0PJyPANgoU/YD6zcitWyXI/AAAAAAAB250/rYd1lnlrVJAnHpFIxSVBxQd871NtGJH-QCLcBGAsYHQ/s535/catu%2Bslogan%2B1.jpg"
                alt="Catupiry"
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 900 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://www.milkpoint.com.br/img/artigo/29565/?w=800&h=600&cf=1&vs=19102016082419"
                alt="President"
              />
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </Box >

  );
};
