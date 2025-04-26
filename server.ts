<<<<<<< HEAD
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Ivy Recruitment Platform API!');
});

const PORT = process.env.PORT || 5000;
=======
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Ivy Recruitment Platform API!');
});

const PORT = process.env.PORT || 5000;
>>>>>>> b6aa89fe9e46258355d631cebe7f07a22e77a7ab
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));