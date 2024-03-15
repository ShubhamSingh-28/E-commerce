import { ReactElement, useState } from "react";
import TableHOC from "../Components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";


type DataType  = {
  _id:string;
  amount:number;
  quantity:number;
  discount:number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[]=[
  {
  Header:"ID",
  accessor: "_id"
},
  {
    Header: 'Amount',
    accessor: 'amount'
  },
   {
    Header:"Quantity",
     accessor:'quantity',
   },
   {
    Header: 'Discount',
    accessor: 'discount'
   },
   {
    Header: 'Status',
    accessor: 'status'
   },
   {
    Header: 'Action',
    accessor:"action"
   },
]


function Orders() {
  const [rows] =useState<DataType[]>([{
    _id: "ghkggg",
    amount:45454,
    quantity:23,
    discount:5666,
    status: <span className="red">
      processing
    </span>,
    action: <Link to={`/order/ghkggg`}></Link>
  }])
    const Table = TableHOC<DataType>(column,rows,"dashboard-product-box","orders",true)();
  return (
    <div className="container">
        <h1>My Orders</h1>
        {
          Table
        }
    </div>
  )
}

export default Orders