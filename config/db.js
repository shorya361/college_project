const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');

const connectDB = async ()=>{
    try {
    await   mongoose
        .connect(db,{
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true
        });
        console.log('Mongoose connected..')
    } catch (err ){
        console.log(err.message);
        process.exit(1);

    }

}
module.exports=connectDB;