//import { FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

//import { ResultsTable } from '../../shared/components';

import { CardBox } from '../../shared/components/card-box/CardBox';
//import { VideoPlayer } from '../../shared/components/video/VideoPlayer';
import { CardBoxRecheios } from '../../shared/components';
import { CardBoxCobertura } from '../../shared/components';
import { CardBoxCoberturaSalgado } from '../../shared/components';
import { Typography } from '@mui/material';



export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='APAIXONADOS POR CHURROS'
    // barraDeFerramentas={(
    //   <FerramentasDeDetalhes mostrarBotaoSalvarEFechar /
    //)}>
    >

      <Typography align="center" marginX={1} variant="h4" component="h4">
        SOBRE O TATO CHURROS
      </Typography>

      <CardBox />
      <br></br>

      <Typography align="center" marginX={1} variant="h6" component="h6">
        Os nossos churros doces são feito com os melhores produtos
      </Typography>

      <br></br>

      <CardBoxRecheios />
      <br></br>
      <Typography align="center" marginX={1} variant="h6" component="h6">
        Acrescente em qualquer sabor de churros
      </Typography>
      <br></br>
      <CardBoxCobertura />
      <br></br>
      <Typography align="center" marginX={1} variant="h6" component="h6">
        Churros Salgados
      </Typography>
      <br></br>
      <CardBoxCoberturaSalgado />

    </LayoutBaseDePagina>


  );
};