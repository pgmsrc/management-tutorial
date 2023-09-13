import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material//TableCell';

function City(props) {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.countryCode}</TableCell>
            <TableCell>{props.district}</TableCell>
            <TableCell>{props.population}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
 
export default City;