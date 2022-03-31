/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography, Paper, TextField, FormControl, InputLabel } from '@mui/material';
import { LayoutBaseDePagina } from '../../../shared/layouts';
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
        padding={1}
      >
        <CardBannerPedido />
        <br></br>
        <Box
          gap={1}
          marginX={1}
          padding={3}
          component={Paper}
        >
          <Formulario />

        </Box>

      </Box>

    </LayoutBaseDePagina>







  );
};