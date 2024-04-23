const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
        
app.get('/api/user', (req,res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'data:image/png;base64,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',
            'name' : '김재혁',
            'birthday' : '960110',
            'gender' : '남자',
            'job' : '개발자'
          },
          {
            'id' : 2,
            'image' : 'data:image/png;base64,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',
            'name' : '홍길동',
            'birthday' : '861230',
            'gender' : '남자',
            'job' : '개발자'
          },
          {
            'id' : 3,
            'image' : 'data:image/png;base64,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',
            'name' : '임꺽정',
            'birthday' : '771111',
            'gender' : '남자',
            'job' : '개발자'
          }
    ]);
});
        
app.listen(port, () => {
    console.log(`${port} 포트가 열렸습니다~^^`);
});