import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import React, { useState, useEffect } from 'react';

function App() {
  const url = "http://localhost:5000/api/customers";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, [url])

  return (
    <Paper> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
      </Table>
        {data.map((customer) => { return (<Customer key={customer.id}
          id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}
          />);
        })}
    </Paper>
  );
}

export default App;
