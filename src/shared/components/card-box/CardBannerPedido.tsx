
import Card from '@mui/material/Card';

import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Grid, Paper, Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: theme.spacing(0.6),
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0),
    "&:hover": {
      backgroundColor: "#f37122"
    }
  },
  media: {
    height: 160
  }
}));

export const CardBannerPedido: React.FC = () => {
  const classes = useStyles();

  return (

    <Box
      gap={1}
      marginX={1}
      padding={1}
      component={Paper}
    >


      <Grid lg={12} item container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <Card className={classes.root} elevation={3}>
            <CardActionArea target="_blank" rel="noopener" href="https://www.ifood.com.br/delivery/sao-bernardo-do-campo-sp/tatos-churros-independencia/c1065c8e-7fe1-4d5c-a5a5-457cc88f0d64?UTM_Medium=share">
              <CardMedia
                className={classes.media}
                image="https://static.wixstatic.com/media/438f00_a57ea989f57b469c8e35e2a86162948a~mv2.jpg/v1/fill/w_900,h_900,al_c,q_90/438f00_a57ea989f57b469c8e35e2a86162948a~mv2.jpg"
                title="Ifood"
              />

            </CardActionArea>

          </Card>

        </Grid>
        <Typography align="center" padding={8} marginX={10} variant="h4" component="h4">
          Qual é a sua escolha de hoje?

        </Typography>
      </Grid>

    </Box>

  );
};
