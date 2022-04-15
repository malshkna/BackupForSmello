const Router = require('express')
const router = new Router()
const apartmentRouter = require('./apartmentRouter')
const userRouter = require('./userRouter')
const ownerRouter = require('./ownerRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/owner', ownerRouter)
router.use('/apartment', apartmentRouter)


module.exports = router 