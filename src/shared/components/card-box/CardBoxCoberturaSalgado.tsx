
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Typography } from '@mui/material';
//import Paper from '@mui/material/Paper';

import { Grid } from '@material-ui/core';


export const CardBoxCoberturaSalgado = () => {


  return (

    <Box
      gap={1}
      marginX={1}
      padding={3}

    >
      <br></br>

      <Typography marginX={1} variant="h5" component="h5">
        Escolha sua cobertura salgadas
      </Typography>
      <br></br>

      <Grid justifyContent="center" lg={12} item container spacing={2}>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 500 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://img.itdg.com.br/tdg/images/blog/uploads/2019/02/Receitas-com-bacon.jpg?w=1200"
                alt="Bacon"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 500 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2020/12/01/receitas-com-calabresa.jpg"
                alt="Calabresa triturada"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://img.itdg.com.br/tdg/images/recipes/000/157/785/357336/357336_original.jpg?mode=crop&width=710&height=400"
                alt="Frango desfiado"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://static7.depositphotos.com/1010050/724/i/600/depositphotos_7248377-stock-photo-sliced-ham.jpg"
                alt="Presunto"
              />

            </CardActionArea>
          </Card>
        </Grid>

      </Grid>

    </Box >

  );
};
