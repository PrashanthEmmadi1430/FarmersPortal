const mongoose=require( 'mongoose');
const bcrypt=require( 'bcryptjs');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    gmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
}
) ;
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10);
       this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.passwordcheck=async function(enteredpassword){
return bcrypt.compare(enteredpassword,this.password);
}
module.exports=mongoose.model('User',userSchema);