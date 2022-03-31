/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography, Paper, TextField, FormControl, InputLabel } from '@mui/material';
import { LayoutBaseDePagina } from '../../../shared/layouts';
//import { LayoutBaseDePagina } from '../../../shared/layouts';

import { CardBannerPedido } from '../../../shared/components/card-box/CardBannerPedido';

import { Formulario } from '../../../shared/components/formulario/Formulario';


export const Pedido: React.FC = () => {

  return (

    <LayoutBaseDePagina
      titulo='Faça o seu Pedido!'

    >

      <Box
        gap={1}
        marginX={1}
        padding={3}
      >
        <CardBannerPedido />
        <br></br>
        <Typography align="center" marginX={1} variant="h4" component="h4">
          Qual a sua escolha de hoje?
        </Typography>
        <br></br>

        <Box
          gap={1}
          marginX={1}
          padding={3}
          component={Paper}
        >

          <Formulario />

          <Typography align="center" marginX={1} variant="h6" component="h6">

          </Typography>

        </Box>
      </Box>


    </LayoutBaseDePagina>







  );
};