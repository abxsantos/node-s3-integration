import express from 'express'
import { urlencoded, json } from 'body-parser'
import awsRouter from './components/aws/routes/routes-aws';

const app = express();

app.use(
    json()
)

app.use(
    urlencoded({extended: false})
)

app.use(awsRouter)

export default app;