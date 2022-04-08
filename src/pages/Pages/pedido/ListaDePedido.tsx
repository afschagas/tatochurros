import { useEffect, useMemo, useState } from 'react';
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

// Components
import { IListagemPedido, PedidoService } from '../../../shared/services/api/pedido/PedidoService';
import { FerramentasDaListagem } from '../../../shared/components';
import { LayoutBaseDePagina } from '../../../shared/layouts';
import { useDebounce } from '../../../shared/hooks/UseDebounce';
import { Environment } from '../../../shared/environment';
//import { ResultsTablePedido } from '../../../shared/components/results-table/ResultsTablePedido';

// Libs
//import { toast } from 'react-toastify';


export const ListaDePedido: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [rows, setRows] = useState<IListagemPedido[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0)

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    //Quando o getAll retornar faça alguma coisa
    setIsLoading(true);

    debounce(() => {
      PedidoService.getAll(1, busca)
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);

            setTotalCount(result.totalCount);
            setRows(result.data);
          }
        });
    });

  }, [busca]);


  return (
    <LayoutBaseDePagina
      titulo='Lista de Pedidos'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova'
          aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nº Pedido</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Churros Doce</TableCell>
              <TableCell>Cobertura Doce</TableCell>
              <TableCell>Churros Salgado</TableCell>
              <TableCell>Cobertura Salgado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id_pedido}>
                <TableCell>{row.id_pedido}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.endereco}</TableCell>
                <TableCell>{row.telefone}</TableCell>
                <TableCell>{row.churros_doce}</TableCell>
                <TableCell>{row.cobertura_doce}</TableCell>
                <TableCell>{row.churros_salgado}</TableCell>
                <TableCell>{row.cobertura_salgado}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={8}>
                  <LinearProgress variant='indeterminate' />

                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>

    </LayoutBaseDePagina>
  );
};






// 1º LayoutBaseDePagina 

// 2º  barraDeFerramentas