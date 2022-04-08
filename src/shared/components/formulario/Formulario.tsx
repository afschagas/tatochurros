/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Button, Container, Select, MenuItem, Typography, Paper, TextField, FormControl, InputLabel, ListItemText } from '@mui/material';
import { makeStyles } from '@material-ui/styles';


//Lib
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import axios from 'axios';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex'
  }
})

toast.configure()



export const Formulario: React.FC = () => {

  let navigate = useNavigate();

  const [data, setData] = useState({

    nome: '',
    endereco: '',
    telefone: '',
    churros_doce: '',
    churros_salgado: '',
    cobertura_doce: '',
    cobertura_salgado: '',
  });

  const [selectedChurros, setSelectedChurros] = useState<any>([]);

  const [churros, setChurros] = useState([
    { id: 0, name: 'Chocolate' },
    { id: 1, name: 'Doce de Lite' },
    { id: 2, name: 'Goiabada' },

  ]);

  const [coberturaDoce, setCoberturaDoce] = useState([
    { id: 0, name: 'Granulado de Chocolate' },
    { id: 1, name: 'Granulado Colorido' },
    { id: 2, name: 'Coco Ralado' },
    { id: 3, name: 'Gostas de Chocolate' },
    { id: 4, name: 'Confetti' },
    { id: 5, name: 'Choco Boll' },
    { id: 6, name: 'Bis' },
    { id: 7, name: 'KitKat' },

  ]);

  const [churrosSalgado, setChurrosSalgado] = useState([
    { id: 0, name: 'Catupiry' },
    { id: 1, name: 'Cheddar' },
    { id: 2, name: 'Requeijão' },
    { id: 3, name: '4 Queijos' },
    { id: 4, name: 'Mussarela' },

  ]);

  const [coberturaSalgado, setCoberturaSalgado] = useState([
    { id: 0, name: 'Bacon' },
    { id: 1, name: 'Calabresa' },
    { id: 2, name: 'Frango' },
    { id: 3, name: 'Presunto' },

  ]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setNomeError(false)
    // setEnderecoError(false)
    // setPhoneError(false)


    // Armazene os estados nos dados do formulário
    const pedidoData = {
      nome: data.nome,
      endereco: data.endereco,
      telefone: data.telefone,
      churros_doce: data.churros_doce,
      churros_salgado: data.churros_salgado,
      cobertura_doce: data.cobertura_doce,
      cobertura_salgado: data.cobertura_salgado

    };

    if (data.nome === '') {
      setNomeError(true)
      toast.warn('Preencha os campos em vermelho.', {
        autoClose: 5000,
      });
      return;
    }

    if (data.endereco === '') {
      setEnderecoError(true)
      toast.warn('Preencha os campos em vermelho.', {
        autoClose: 5000,
      });
      return;
    }

    if (data.telefone === '') {
      setTelefoneError(true)
      toast.warn('Preencha os campos em vermelho.', {
        autoClose: 5000,
      });
      return;
    }

    if (data.churros_doce === '') {
      setChurrosDoce(true)
      toast.warn('Escolha o tipo do Churros!.', {
        autoClose: 5000,
      });
      return;
    }

    if (data.cobertura_doce === '') {
      setCobDoce(true)
      toast.warn('Escolha a sua cobertura!.', {
        autoClose: 5000,
      });
      return;
    }

    // fazendo request post axios  tra
    axios.post("https://tatochurros.herokuapp.com/pedido", pedidoData)
      .then((response) => {
        if (response.status === 200) {
          navigate('/')
        }
        toast.success('Pedido Realizado.', {
          autoClose: 5000,
        });
      });
  };

  // const [values, setValues] = useState(initialValue);

  const classes = useStyles();

  //Estado dos Inputs
  //const [nome, setNome] = useState<any>('');
  // const [endereco, setEndereco] = useState<any>('');
  // const [telefone, setTelefone] = useState<any>('');


  // Estado de erro no Inputs
  const [nomeError, setNomeError] = useState(false);
  const [enderecoError, setEnderecoError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);
  const [churrosDoce, setChurrosDoce] = useState(false);
  const [cobDoce, setCobDoce] = useState(false);

  // Inputs de Seleção
  //const [churros, setChurros] = useState();

  const updateSelectVal = (event: any) => {
    console.log(event.target.value)
  }


  // Limpa os Inputs

  function LimpaCampos() {

  }

  console.log(churros)

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
          type="text"
          label="Nome"
          name="nome"
          value={data.nome}
          onChange={handleChange}
          className={classes.field}
          variant='outlined'
          required
          error={nomeError}

        />

        <TextField
          type="text"
          label="Endereco"
          name="endereco"
          value={data.endereco}
          onChange={handleChange}
          className={classes.field}
          variant='outlined'
          required
          error={enderecoError}
        />

        <InputMask

          mask="(11) 99999 9999"
          value={data.telefone}
          disabled={false}
          onChange={handleChange}
        >
          {() => <TextField
            className={classes.field}
            label="Telefone"
            name="telefone"
            variant='outlined'
            required
            error={telefoneError}
          />}
        </InputMask>

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Doce
        </Typography>
        <br></br>
        <FormControl sx={{ m: 0.2, width: '32.7ch' }}>
          <InputLabel>Churros</InputLabel>
          <Select

            label="Churros"
            name="churros_doce"
            value={data.churros_doce}
            displayEmpty
            onChange={handleChange}
            error={churrosDoce}

          >
            {churros.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <ListItemText primary={item.name} />
              </MenuItem>

            ))}

          </Select>

          <br></br>

        </FormControl>

        <FormControl sx={{ m: 0.2, width: '32.7ch' }}>
          <InputLabel>Cobertura</InputLabel>
          <Select

            label="Cobertura"
            name="cobertura_doce"
            value={data.cobertura_doce}
            displayEmpty
            onChange={handleChange}
            error={cobDoce}
          >
            {coberturaDoce.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <ListItemText primary={item.name} />
              </MenuItem>

            ))}

          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Salgado
        </Typography>
        <br></br>
        <FormControl sx={{ m: 0.2, width: '32.7ch' }}>
          <InputLabel>Churros</InputLabel>
          <Select

            label="Churros"
            name="churros_salgado"
            value={data.churros_salgado}
            displayEmpty
            onChange={handleChange}
          >

            {churrosSalgado.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <ListItemText primary={item.name} />
              </MenuItem>

            ))}


          </Select>

          <br></br>

        </FormControl>

        <FormControl sx={{ m: 0.2, width: '32.7ch' }}>
          <InputLabel>Cobertura</InputLabel>
          <Select

            label="Cobertura"
            name="cobertura_salgado"
            value={data.cobertura_salgado}
            displayEmpty
            onChange={handleChange}
          >
            {coberturaSalgado.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <ListItemText primary={item.name} />
              </MenuItem>

            ))}

          </Select>
          <br></br>
          <br></br>
        </FormControl>
        <br></br>
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