const dotenv=require( 'dotenv');
const express=require( 'express');
const cookieParser=require( 'cookie-parser');
const mongoose=require( 'mongoose');
const router=require( './routes/userRoutes');
const { notFound,errorHandler }=require( './middlewares/errorMiddleware');

dotenv.config();
    mongoose.connect('mongodb+srv://prashuemmadi:W4Cx0qzkfKajXgof@cluster0.qoovphh.mongodb.net/users');
const app=express();
let port=5000||process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
 app.get('/',(req,res)=>res.send("server is ready"));
app.listen(port,()=>console.log(`listening on the sever ${port}`))
 app.use('/api/user',router);
app.use(notFound);
 app.use(errorHandler);