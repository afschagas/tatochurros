
import Card from '@mui/material/Card';

import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    borderRadius: theme.spacing(0),
    "&:hover": {
      backgroundColor: "#f37122"
    }
  },
  media: {
    height: 390
  }
}));

export const CardBannerPedido: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/04/35/64/0435645bf1e14462cfaae0abb8fbc435.png"
          title="Face"
        />
      </CardActionArea>
    </Card>


  );
};
