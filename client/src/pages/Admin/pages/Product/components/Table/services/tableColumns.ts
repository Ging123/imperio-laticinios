export default function tableColumns() {
  return [
    {
      cellStyle:{ background:"#f7f7f7" },
      field:"name", 
      headerStyle:{ background:"#f7f7f7" },
      title:"Nome",
      validate:(rowData:any) => {
        if(!rowData.name) return 'Nome não foi preenchido';
        if(rowData.name.length > 100) return 'Nome do produto deve ter no máximo 100 caracteiries';
        return true;
      }
    },
    {
      cellStyle:{ background:"#f7f7f7" },
      field:"price",
      headerStyle:{ background:"#f7f7f7" },
      title:"Preço",
      validate:(rowData:any) => {
        if(!rowData.price) return 'Preço não foi preenchido';
        if(isNaN(rowData.price)) return 'Preço deve conter apenas números';
        if(rowData.price > 10000) return 'Preço deve ser no máximo 10.000R$';
        return true;
      }
    },
    { 
      cellStyle:{ background:"#f7f7f7" },
      field:"quantity",
      headerStyle:{ background:"#f7f7f7" },
      title:"Quantidade",
      validate:(rowData:any) => {
        if(!rowData.quantity) return 'Quantidade não foi preenchido';
        if(isNaN(rowData.quantity)) return 'Quantidade deve conter apenas números';
        if(rowData.quantity > 10000) return 'Quantidade deve ser no máximo 10.000';
        return true;
      }
    },
    {
      cellStyle:{ background:"#f7f7f7" },
      field:"description",
      headerStyle:{ background:"#f7f7f7" },
      title:"Descrição",
      validate:(rowData:any) => {
        if(rowData.description) {
          if(rowData.description.length > 100) {
            return 'Descrição deve ter no máximo 100 caracteries';
          }
        }
        return true;
      }
    },
    {
      cellStyle:{ background:"#f7f7f7" },
      field:"tag",
      headerStyle:{ background:"#f7f7f7" },
      title:"Tipo",
      value:'queijo',
      lookup:{
        'queijo':'queijo',
        'leite':'leite',
        'iorgute':'iorgute',
        'requeijão':'requeijão',
        'manteiga':'manteiga'
      },
      validate:(rowData:any) => {
        if(!rowData.tag) return 'Tipo de produto não foi preenchido';
        return true;
      }
    }
  ]
}