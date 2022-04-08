import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IListagemPedido {
  id_pedido: number;
  nome: string;
  endereco: number;
  telefone: number;
  churros_doce: string;
  churros_salgado: string;
  cobertura_doce: string;
  cobertura_salgado: string;
}

export interface IDetalhePedido {
  id_pedido: number;
  nome: string;
  endereco: number;
  telefone: number;
  churros_doce: string;
  churros_salgado: string;
  cobertura_doce: string;
  cobertura_salgado: string;
}

type TPedidoComTotalCount = {
  data: IListagemPedido[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPedidoComTotalCount | Error> => {
  try {
    const urlRelativa = `/pedido?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar os registros.");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros."
    );
  }
};

const getById = async (id_pedido: number): Promise<IDetalhePedido | Error> => {
  try {
    const { data } = await Api.get(`/pedido/${id_pedido}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao consultar o registro.");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o registro"
    );
  }
};

const create = async (
  dados: Omit<IDetalhePedido, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalhePedido>(`/pedido`, dados);

    if (data) {
      return data.id_pedido;
    }

    return new Error("Erro ao criar o registro.");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao criar o registro"
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetalhePedido
): Promise<void | Error> => {
  try {
    await Api.put(`/pedido/${id}`, dados);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro"
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pedido/${id}`);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao excluir o registro"
    );
  }
};

// Método CRUD
export const PedidoService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
