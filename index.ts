import Express from 'express';
import cors from 'cors'

import indicatorsRoutes from './src/routes/indicators'

const app = Express();
app.use(Express.json())// acepta estructura json


app.use(cors());

const PORT = process.env.PORT || 4000 // port of server or default

app.use("/",indicatorsRoutes)

app.listen(PORT, ()=>{
    console.log(`Server On, port ${PORT}`);
})