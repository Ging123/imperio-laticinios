import tableColumns from './services/tableColumns';
import getAllOrders from './services/getAllOrders';
import deleteOrder from './services/deleteOrder';
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
      await getAllOrders()
      .then((orders) => setTableData(orders.data))
      .catch((err) => {
        const error = err.response;
        if(error.status === 401) return goToLoginPage();
        if(error.status === 403) return goToProductPage();
      })
    })();
  }, []);

  return (
    <>
      <MaterialTable
        columns={tableColumns()}
        data={tableData}
        editable={{ 
          onRowDelete:(selectedRow:any) => new Promise(async (success, reject) => {
            const index = selectedRow.tableData.id;
            await deleteOrder(tableData[index]._id)
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
        title="Pedidos"
      />
    </>
  )
}

export default Table;