import express, {Request, Response,Application } from 'express';
const app:Application = express()
import cors from "cors"
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app