
import { Box } from '@mui/material';
import MUIDataTable from "mui-datatables";



export const ResultsTable = () => {
  const columns = [
    {
      name: "recheios",
      label: "Recheios",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "cobertura",
      label: "Cobertura",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "valor",
      label: "Valor",
      options: {
        filter: true,
        sort: false,
      }
    },

  ];

  const data = [
    { recheios: "Doce de Leite", cobertura: "Granulado de Chocolate", valor: "R$ 4,00" },
    { recheios: "Chocolate", cobertura: "Granulado Colorido", valor: "R$ 4,00" },
    { recheios: "Goiabada", cobertura: "Coco Ralado", valor: "R$ 4,00" },
    { recheios: "Doce de Leite", cobertura: "Gotas de Chocolate ou Confetti", valor: "R$ 6,00" },
    { recheios: "Doce de Leite", cobertura: "Confetti", valor: "R$ 6,00" },
    { recheios: "Chocolate", cobertura: "Choco Boll", valor: "R$ 6,00" },
    { recheios: "Leite Ninho", cobertura: "Gotas de Chocolate", valor: "R$ 10,00" },
    { recheios: "Leite Ninho", cobertura: "Confetti", valor: "R$ 10,00" },
    { recheios: "Creme de Avelã", cobertura: "Bis", valor: "R$ 10,00" },
    { recheios: "Creme de Avelã", cobertura: "KitKat", valor: "R$ 10,00" },

    { recheios: "Catupiry", cobertura: "Bacon - Calabresa - Frango - Presunto", valor: "R$ 6,00" },
    { recheios: "Cheddar", cobertura: "Bacon - Calabresa - Frango - Presunto", valor: "R$ 6,00" },
    { recheios: "Requeijão", cobertura: "Bacon - Calabresa - Frango - Presunto", valor: "R$ 6,00" },
    { recheios: "4 Queijos", cobertura: "Bacon - Calabresa - Frango - Presunto", valor: "R$ 6,00" },
    { recheios: "Mussarela", cobertura: "Bacon - Calabresa - Frango - Presunto", valor: "R$ 6,00" },
  ];


  return (

    <div>
      <Box
        padding={1}
      >

        <MUIDataTable

          title={"Nosso Preço"}
          data={data}
          columns={columns}

        />
      </Box>

    </div>

  );
};


