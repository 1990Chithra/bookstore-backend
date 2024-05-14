const express=require('express');
const userController=require('../Controllers/userController');
const bookController=require('../Controllers/bookController')
const jwtMiddileware=require('../Middilewares/jwtMiddileware')
const favoritesController=require('../Controllers/favoriteController')
const libraryController=require('../Controllers/libraryController')
const pdfController=require('../Controllers/pdfController')
const router=new express.Router()


//register
router.post('/admin/register',userController.adminregister)
router.post('/user/register',userController.userregister)

//login
router.post('/admin/login',userController.adminlogin)
router.post('/user/login',userController.userlogin)
//all-users
router.get('/all-users',userController.getAllUsers)


//get all books
router.get('/all-books',bookController.getAllBooks)

//get a book
router.get('/view-book/:id',bookController.getBook)

//get category of books

// router.get('/book-category',jwtMiddileware,bookController.getCategory)

//add book to the library

router.post('/add-favorites',jwtMiddileware,favoritesController.addToFavorites)

//get a favorite item

router.get('/get-favorites',favoritesController.getFavorites)

//delete favorites

router.delete('/delete-favorites/:id',jwtMiddileware,favoritesController.deleteFromFavorites)

//add to library

router.post('/add-libraries',jwtMiddileware,libraryController.addToLibrary)

//get library

router.get('/get-libraries',jwtMiddileware,libraryController.getLibrary)

//delete library

router.delete('/delete-libraries/:id',jwtMiddileware,libraryController.deleteLibraryBook)

router.get('/increment-libraries/:id',jwtMiddileware,libraryController.incrementLibrary)
router.get('/decrement-libraries/:id',jwtMiddileware,libraryController.decrementLibrary)

//add book

router.post('/add-book',jwtMiddileware,bookController.addBook)

//update book

router.put('/update-book/:id',jwtMiddileware,bookController.updateBook)

router.delete('/delete-book/:id',jwtMiddileware,bookController.deleteBook)


router.post('/add-pdfs',jwtMiddileware,pdfController.addPdfs)


router.get('/get-pdfs',jwtMiddileware,pdfController.getPdfs)
module.exports=router