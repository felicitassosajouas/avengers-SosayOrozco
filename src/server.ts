import express from 'express';
import morgan from 'morgan';
import avengerRouter from './routes/avengerRouter';

const app = express()

app.use(morgan('dev'))
app.use(express.json())



app.use('/api/avenger', avengerRouter)



export default app