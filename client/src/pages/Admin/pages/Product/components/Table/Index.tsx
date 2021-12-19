import getAllProducts from './services/getAllProducts';
import addNewProduct from './services/addNewProduct';
import deleteProduct from './services/deleteProduct';
import updateProduct from './services/updateProduct';
import tableColumns from './services/tableColumns';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

const Table = () => {
  const [tableData, setTableData] = useState<any>([]);
  const history = useHistory()
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');
  useEffect(() => {
    (async () => {
      await getAllProducts()
      .then((products) => setTableData(products.data))
      .catch((err) => {
        const error = err.response;
        if(error.status === 401) return goToLoginPage();
        if(error.status === 403) return goToProductPage();
      })
    })()
  }, []);


  return (
    <>
      <MaterialTable
        columns={tableColumns()}
        data={tableData}
        editable={{
          onRowAdd:(newRow) => new Promise(async (success, reject) => {
            await addNewProduct(newRow)
            .then(() => {
              setTableData([...tableData, newRow]);
              success('ok')
            })
            .catch((err) => {
              const error = err.response;
              if(error.status === 401) return goToLoginPage();
              if(error.status === 403) return goToProductPage();
              reject(error.data);
            });
          }),
          onRowUpdate:(newRow, oldRow:any) => new Promise(async (sucess, reject) => {
            await updateProduct(newRow, oldRow.name)
            .then(() => {
              const updateData = [...tableData];
              updateData[oldRow.tableData.id] = newRow;
              setTableData(updateData);
              sucess('ok');
            })
            .catch((err) => {
              const error = err.response;
              if(error.status === 401) return goToLoginPage();
              if(error.status === 403) return goToProductPage();
              reject(error.data);
            });
          }),
          onRowDelete:(selectedRow:any) => new Promise(async (success, reject) => {
            await deleteProduct(selectedRow.name)
            .then(() => {
              const updateData = [...tableData];
              updateData.splice(selectedRow.tableData.id, 1);
              setTableData(updateData)
              success('ok');
            })
            .catch((err) => {
              const error = err.response;
              if(error.status === 401) return goToLoginPage();
              if(error.status === 403) return goToProductPage();
              reject(error.data);
            });
          })
        }}
        options={{ 
          actionsColumnIndex:-1,
          addRowPosition:'first',
          filtering:true,
          headerStyle:{ background:"#f7f7f7", boxShadow:"none" }
        }}
        style={{ background:"#f7f7f7", boxShadow:"none" }} 
        title="Produtos"
      />
    </>
  )
}

export default Table;