import React, { useState } from 'react';

//Lib
import axios from 'axios';


export const Teste: React.FC = () => {

  const [data, setData] = useState({

    nome: '',
    endereco: '',
    telefone: '',
    churros_doce: '',
    churros_salgado: '',
    cobertura_doce: '',
    cobertura_salgado: ''
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
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

    // fazendo request post axios  tra
    axios.post("https://tatochurros.herokuapp.com/pedido", pedidoData)
      .then((response) => {
        console.log(response.status);
      });
  };


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="nome"
          value={data.nome}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="endereco"
          value={data.endereco}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="telefone"
          value={data.telefone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="churros_doce"
          value={data.churros_doce}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="churros_salgado"
          value={data.churros_salgado}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cobertura_doce"
          value={data.cobertura_doce}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cobertura_salgado"
          value={data.cobertura_salgado}
          onChange={handleChange}
          required
        />

        <button
          type="submit"

        >
          Finalizar Pedido
        </button>


      </form>
    </div>

  );
};