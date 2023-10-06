const express =require('express');
const protect =require('../middlewares/authmiddleware') ;
const {loginuser,registeruser,updateuserprofile, userprofile,logoutuser}  =require( '../controllers/userController')
const router=express.Router();
router.use('/login',loginuser);
router.use('/register',registeruser);
router.use('/logout',logoutuser);
router.route('/profile/:id') 
.get(protect,userprofile)
.put(protect,updateuserprofile);
module.exports= router; 