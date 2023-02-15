import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
