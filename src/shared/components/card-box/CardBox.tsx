
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Paper, Typography } from '@mui/material';

import { Grid } from '@material-ui/core';


export const CardBox = () => {


  return (

    <Box
      gap={1}
      marginX={1}
      padding={3}
    >
      <Box
        gap={1}
        marginX={0}
        padding={1}
        component={Paper}
      >
        <Typography marginX={1} variant="h5" component="h5">
          Conheça Nossos Sabores
        </Typography>

      </Box>
      <br></br>

      <Grid lg={12} item container spacing={2}>

        <Grid item lg={3} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://http2.mlstatic.com/D_NQ_NP_781191-MLB25566044472_052017-O.jpg"
                alt="churros de chocolate"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chocolate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tomar um lanche com um bom churros de chocolate, não tem coisa melhor.
                  É um alimento típico da Espanha que é muito consumido durante os meses de inverno.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://www.ibahia.com/fileadmin/representativas/pics/Churros.jpg"
                alt="churros de chocolate"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Doce de leite
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tomar um lanche com um bom churros doce de leite, não tem coisa melhor.
                  É um alimento típico da Espanha que é muito consumido durante os meses de inverno.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Card  >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="http://paodequeijodonanelza.com.br/wp-content/uploads/wm-products/_DSC8527_goiabada.jpg"
                alt="Goiabada"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Goiabada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tomar um lanche com um bom churros de goiabada, não tem coisa melhor.
                  É um alimento típico da Espanha que é muito consumido durante os meses de inverno.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://media-cdn.tripadvisor.com/media/photo-s/11/ef/37/ae/churros-salgado.jpg"
                alt="Churros salgado"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Salgado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  No lugar de uma pizza, que tal um bom churros salgado no seu jantar, não é verdade.
                  É um alimento típico da Espanha que é muito consumido durante os meses de inverno.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </Box>

  );
};
