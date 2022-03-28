
import Card from '@mui/material/Card';

import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    borderRadius: theme.spacing(0),
    "&:hover": {
      backgroundColor: "#f37122"
    }
  },
  media: {
    height: 140
  }
}));

export const CardBanner: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i1.wp.com/www.itapiranews.com.br/wp-content/uploads/2019/07/Gelato-2.jpeg"
          title="Face"
        />
      </CardActionArea>
    </Card>


  );
};
