import express from 'express'
import { urlencoded, json } from 'body-parser'

const app = express();

app.use(
    json()
)

app.use(
    urlencoded({extended: false})
)

export default app;