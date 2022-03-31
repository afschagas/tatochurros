/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { Box, Button, Container, Select, MenuItem, Typography, Paper, TextField, FormControl, InputLabel } from '@mui/material';
import { makeStyles } from '@material-ui/styles';


//Lib
import { toast } from 'react-toastify';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex'
  }
})

toast.configure()
export const Formulario: React.FC = () => {

  const classes = useStyles();

  //Estado dos Inputs
  const [nome, setNome] = useState<any>('');

  // Estado de erro no Inputs
  const [nomeError, setNomeError] = useState(false);

  // Inputs de Seleção
  const [churros, setChurros] = useState();
  const updateSelectVal = (event: any) => {
    console.log(event.target.value)
  }

  const [cobertura, setCobertura] = useState();

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setNomeError(false)
    LimpaCampos()

    if (nome === '') {
      setNomeError(true)
      toast.warn('Preencha os campos em vermelho.', {
        autoClose: 5000,
      });
      return;

    }


    if (nome !== '') {
      setNomeError(false)
      toast.success('Pedido Realizado.', {
        autoClose: 5000,

      });

      console.log(nome)
    }
  }

  // Limpa os Inputs

  function LimpaCampos() {
    setNome('');

  }

  return (

    <Container>

      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Faça o seu Pedido abaixo!
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit} >
        <TextField
          onChange={(event: any) => setNome(event.target.value)}
          className={classes.field}
          label="Nome"
          variant='outlined'
          required
          error={nomeError}
        />

        <TextField
          className={classes.field}
          label="Endereço"
          variant='outlined'
          required
        />

        <TextField
          className={classes.field}
          label="Telefone"
          type="number"
          variant='outlined'
          required
        />

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Doce
        </Typography>
        <br></br>
        <FormControl sx={{ m: 0.2, width: '35ch' }}>
          <InputLabel>Churros</InputLabel>
          <Select

            label="Churros"
            value={churros}
            displayEmpty
            onChange={updateSelectVal}
          >

            <MenuItem value={1} >Chocolate</MenuItem>
            <MenuItem value={2} >Doce de Leite</MenuItem>
            <MenuItem value={3} >Goiabada</MenuItem>


          </Select>

          <br></br>

        </FormControl>

        <FormControl sx={{ m: 0.2, width: '42.7ch' }}>
          <InputLabel>Cobertura</InputLabel>
          <Select

            label="Cobertura"
            value={cobertura}
            displayEmpty
            onChange={updateSelectVal}
          >
            <MenuItem value={1} >Granulado de Chocolate</MenuItem>
            <MenuItem value={2} >Granulado Colorido</MenuItem>
            <MenuItem value={3} >Coco Ralado</MenuItem>
            <MenuItem value={4} >Gotas de Chocolate</MenuItem>
            <MenuItem value={5} >Confetti</MenuItem>
            <MenuItem value={6} >Choco Boll</MenuItem>
            <MenuItem value={7} >Bis</MenuItem>
            <MenuItem value={8} >KitKat</MenuItem>

          </Select>
        </FormControl>

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Salgado
        </Typography>
        <br></br>
        <FormControl sx={{ m: 0.2, width: '35ch' }}>
          <InputLabel>Churros</InputLabel>
          <Select

            label="Churros"
            value={churros}
            displayEmpty
            onChange={updateSelectVal}
          >

            <MenuItem value={1} >Catupiry</MenuItem>
            <MenuItem value={2} >Cheddar</MenuItem>
            <MenuItem value={3} >Requeijão</MenuItem>
            <MenuItem value={4} >4 Queijos</MenuItem>
            <MenuItem value={5} >Mussarela</MenuItem>


          </Select>

          <br></br>

        </FormControl>

        <FormControl sx={{ m: 0.2, width: '42.7ch' }}>
          <InputLabel>Cobertura</InputLabel>
          <Select

            label="Cobertura"
            value={cobertura}
            displayEmpty
            onChange={updateSelectVal}
          >
            <MenuItem value={1} >Bacon</MenuItem>
            <MenuItem value={2} >Calabresa</MenuItem>
            <MenuItem value={3} >Frango</MenuItem>
            <MenuItem value={4} >Presunto</MenuItem>

          </Select>
        </FormControl>

        <br></br>
        <Button
          type="submit"
          color='primary'
          variant='contained'
        >
          Finalizar Pedido
        </Button>


      </form>

    </Container>

  );
};