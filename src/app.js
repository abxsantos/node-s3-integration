import express from 'express'
import { urlencoded, json } from 'body-parser'
import awsRouter from './components/aws/routes/routes-aws';

require('dotenv').config();

const app = express();

app.use(
    json()
)

app.use(
    urlencoded({extended: false})
)

app.use(awsRouter)

export default app;