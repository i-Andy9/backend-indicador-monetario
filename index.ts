import Express from 'express';

import indicatorsRoutes from './routes/indicators'

const app = Express();
app.use(Express.json())// acepta estructura json


const PORT = process.env.PORT || 4000 // port of server or default

app.use("/",indicatorsRoutes)

app.listen(PORT, ()=>{
    console.log(`Server On, port ${PORT}`);
})