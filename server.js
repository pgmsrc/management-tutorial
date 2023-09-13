const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
    ]);
});

app.listen(port, () => console.log(`Listeing on port: ${port}`));