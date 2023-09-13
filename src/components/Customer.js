import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material//TableCell';

function Customer(props) {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="alt profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            </TableRow>
          </TableBody>
      </Table>
    </div>
  );
}
 
export default Customer;