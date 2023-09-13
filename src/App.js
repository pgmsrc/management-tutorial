import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://loremflickr.com/64/64/1',
  'name': '서웅교',
  'birthday': '700429',
  'gender': '남자',
  'job': '무직'
  },
  {
    'id': 2,
    'image': 'https://loremflickr.com/64/64/2',
    'name': '김지애',
    'birthday': '761112',
    'gender': '여자',
    'job': '메니저'
    },
  {
  'id': 3,
  'image': 'https://loremflickr.com/64/64/3',
  'name': '서준혁',
  'birthday': '030318',
  'gender': '남자',
  'job': '대학생'
  }
]

function App() {
  return (
    <div>
      {customers.map(customer => {
        return (
          <Customer key={customer.id}
          id={customer.id}
          image={customer.iamge}
          name={customer.name}
          birthday={customer.borthday}
          gender={customer.gender}
          job={customer.job}
          />
        )
      })}
    </div>
  );
}

export default App;
