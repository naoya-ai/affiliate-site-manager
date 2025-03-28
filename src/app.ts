import express from 'express';
import bodyParser from 'body-parser';
import { affiliates } from './models/index';
import routes from './routes/index';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/affiliates', routes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/earthquake', (req, res) => {
    // 手書きの地震情報
    const earthquakeData = {
        title: '静岡県沖で地震発生',
        updated: '2025-03-28 12:00:00',
        content: '静岡県沖でマグニチュード6.8の地震が発生しました。深さは20kmで、津波の心配はありません。'
    };

    res.json(earthquakeData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});