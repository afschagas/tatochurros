
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


export const Footer = () => {


  return (
    <footer>
      <Paper elevation={2}>
        <Typography variant="h5" component="h3">
          React App with Material UI
        </Typography>
        <Typography component="p">
          @2018 All right reserved
        </Typography>
      </Paper>
    </footer>


  );
};
