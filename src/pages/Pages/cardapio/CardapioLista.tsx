import { Box, Typography } from '@mui/material';
import { LayoutBaseDePagina } from '../../../shared/layouts';
//import { LayoutBaseDePagina } from '../../../shared/layouts';

import { ResultsTable } from '../../../shared/components/results-table/ResultsTable';

import { CardBanner } from '../../../shared/components/card-box/CardBanner';


export const CardapioLista: React.FC = () => {

  return (

    <LayoutBaseDePagina
      titulo='Cardápio'

    >

      <Box
        gap={1}
        marginX={1}
        padding={3}
      >

        <Typography align="center" marginX={1} variant="h4" component="h4">
          Lanche ou jantar?
        </Typography>
        <br></br>
        <CardBanner />
        <br></br>


        <Typography align="center" marginX={1} variant="h6" component="h6">
          Nosso cardápio é super variado! Vem descobrir sabores únicos dos Churros!

          Consulte a lista de sabores abaixo.
        </Typography>

        <ResultsTable />
      </Box>


    </LayoutBaseDePagina>







  );
};