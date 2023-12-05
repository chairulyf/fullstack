import express from "express";
import UserController from "../controller/user-controller.js";

const publicRouter = new express.Router()
publicRouter.post('/api/users',UserController.register)

const userRouter = new express.Router()

//halaman home
userRouter.get('/', (req, res)=>{
    res.render('index')
})

//halaman login
userRouter.get('/login', (req, res)=>{
    res.render('login')
})

userRouter.get('/index/login', (req, res) =>{
    res.render('index')
})

//halaman sign-up
userRouter.get('/sign-up', (req, res)=>{
    res.render('sign-up')
})

//halaman profil
userRouter.get('/profil', (req, res)=>{
    res.render('Profil')
})

// //-------halaman destination----------
//halaman bali destination
userRouter.get('/bali-destination', (req,res) =>{
    res.render('Bali-destination')
})

//halaman lombok destination
userRouter.get('/lombok-destination', (req,res)=>{
    res.render('Lombok-destination')
})

//halaman jawa destination
userRouter.get('/jawa-destination', (req, res)=> {
    res.render('jawa-destination')
})

//-----------halaman nature------------
//halaman nature bali
userRouter.get('/nature-bali', (req,res)=>{
    res.render('Nature-bali')
})

//halaman nature jawa
userRouter.get('/nature-jawa', (req, res)=>{
    res.render('Nature-jawa')
})

//halaman nature lombok
userRouter.get('/nature-lombok', (req, res)=> {
    res.render('Nature-lombok')
})

//----------------halman culture-------------------
//halaman culture bali
userRouter.get('/culture', (req, res)=>{
    res.render('Culture')
})

//halaman culture jawa
userRouter.get('/culture-jawa', (req, res)=>{
    res.render('culture-jawa')
})

//halaman culture lombok
userRouter.get('/culture-lombok', (req, res)=>{
    res.render('culture-lombok')
})

//------------halaman beach-------------
//halaman beach bali
userRouter.get('/beach-bali' , (req, res)=>{
    res.render('Beach-bali')
})

//halaman beach jawa
userRouter.get('/beach-jawa', (req, res)=>{
    res.render('Beach-jawa')
})

//halaman beach lombok
userRouter.get('/beach-lombok' , (req, res)=>{
    res.render('Beach-lombok')
})

//--------halaman booking------------

//halaman booking hotel
userRouter.get('/booking-hotel', (req, res)=>{
    res.render('Booking-hotel')
})

//halaman booking now
userRouter.get('/booking-now', (req, res)=>{
    res.render('Booking-now')
})
-
//halaman invoice
userRouter.get('/invoice', (req, res)=>{
    res.render('invoice')
})

userRouter.use('/' ,function(req, res){
    res.status(404)
    res.send ('<h1> 404 </h1>')
})

export {
    publicRouter,
    userRouter
}

