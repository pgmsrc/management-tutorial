import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [
  {
    'id': 1,
    'image': 'https://loremflickr.com/64/64/1',
    'name': '김지애',
    'birthday': '761112',
    'gender': '여자',
    'job': '메니저'
    },
  {
    'id': 2,
    'image': 'https://loremflickr.com/64/64/2',
    'name': '서준혁',
    'birthday': '030318',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://loremflickr.com/64/64/3',
    'name': '서웅교',
    'birthday': '700429',
    'gender': '남자',
    'job': '개발자'
  }
]

function App() {
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
        {customers.map(customer => { return ( <Customer key={customer.id}
          id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}
          /> );
        })}
    </Paper>
  );
}

export default App;
