const express = require('express')
const router = express.Router()
const {
   registerUser,
   loginUser,
//   getMe,
 } = require('../controllers/userController')
// const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
// router.get('/me', protect, getMe)


// Sans un controller
// router.post('/', (req,res)=> {
//     res.send('Register route')
// })
// router.post('/login', (req,res)=> {
//     res.send('Login route')
// })

module.exports = router