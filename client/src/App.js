import './App.css';
import Customer from './components/Customer';
import City from './components/City';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import React, { useState, useEffect } from 'react';

function App() {
  const url1 = "http://localhost:5000/api/customers";
  const url2 = "http://localhost:5000/api/city";
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch(url1)
    .then(response => response.json())
    .then(data1 => setData(data1))
    .catch(error => console.error(error));
  }, [url1])

  useEffect(() => {
    fetch(url2)
    .then(response => response.json())
    .then(data2 => setData2(data2))
    .catch(error => console.error(error));
  }, [url2])

  return (
    <Paper> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">번호</TableCell>
            <TableCell align="left">이미지</TableCell>
            <TableCell align="left">이름</TableCell>
            <TableCell align="left">생년월일</TableCell>
            <TableCell align="left">성별</TableCell>
            <TableCell align="left">직업</TableCell>
          </TableRow>
        </TableHead>
      </Table>
        {data1.map((customer) => { return (<Customer key={customer.id}
          id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}
          />);
        })}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">ContryCode</TableCell>
            <TableCell align="left">District</TableCell>
            <TableCell align="left">Population</TableCell>
          </TableRow>
        </TableHead>
      </Table>
        {data2.map((city) => { return (<City key={city.ID}
          id={city.ID} name={city.Name} countryCode={city.CountryCode} distrcit={city.District} population={city.Population}
          />);
        })}

    </Paper>
  );
}

export default App;
