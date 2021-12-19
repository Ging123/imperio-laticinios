import tableColumns from './services/tableColumns';
import MaterialTable from 'material-table';
import mockData from './services/mockData';
import { useState } from 'react';

const Table = () => {
  const [tableData, setTableData] = useState(mockData);
  

  return (
    <>
      <MaterialTable
        columns={tableColumns()}
        data={tableData}
        editable={{ 
          onRowDelete:(selectedRow:any) => new Promise((success, reject) => {
            const updateData = [...tableData];
            updateData.splice(selectedRow.tableData.id, 1);
            setTableData(updateData)
            setTimeout(() => success('ok'), 1000);
          })
        }}
        style={{ background:"#f7f7f7", boxShadow:"none" }} 
        title="Pedidos"
      />
    </>
  )
}

export default Table;