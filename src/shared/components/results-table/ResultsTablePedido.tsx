import React from 'react';
import { useState, useEffect, forwardRef } from 'react';

//Lib Material
import MaterialTable from "material-table";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


//Lib API
import axios from 'axios';

import { Icons } from 'material-table';

const tableIcons: Icons = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props: any, ref: any) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props: any, ref: any) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props: any, ref: any) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props: any, ref: any) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props: any, ref: any) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn {...props} ref={ref} />)
};



export const ResultsTablePedido: React.FC = () => {


  // Material Table Columns
  const columns = [
    { title: "Numero", field: "id_pedido", hidden: false },
    { title: "Nome", field: "nome" },
    { title: "Telefone", field: "telefone" },
    { title: "Churros Doce", field: "churros_doce" },
    { title: "Cobertura Doce", field: "cobertura_doce" },
    { title: "Churros Salgado", field: "churros_salgado" },
    { title: "Cobertura Salgado", field: "cobertura_salgado" },
    { title: "Data do Pedido", field: "created_at" }

  ]
  // Material Table Columns Rows
  const [data, setData] = useState([]); //table data

  const tableRef = React.createRef();



  //for error handling
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [iserror, setIserror] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessages, setErrorMessages] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3333/pedido")
      .then(res => {
        setData(res.data)

        console.log(res.data)
      })
      .catch(error => {
        console.log("Error")
      })

  }, [])


  return (
    <div>
      <MaterialTable
        title="Pedidos em aberto"
        tableRef={tableRef}
        icons={tableIcons}
        columns={columns}
        data={data}

      />
    </div>

  );
};