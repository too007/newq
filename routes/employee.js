const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
const upload = require('../middleware/upload')


router.get('/', EmployeeController.index)

router.get('/bandhani', EmployeeController.bandhaniget)
router.get('/festivewear', EmployeeController.festivewearget)
router.get('/chenderi', EmployeeController.chenderiget)
router.get('/prited', EmployeeController.pritediget)
router.get('/pochampally', EmployeeController.pochampallyget)



router.post('/show', EmployeeController.show)
router.post('/store', upload.single('avatar'), EmployeeController.store)
router.post('/bandhani', upload.single('avatar'), EmployeeController.bandhani)
router.post('/festivewear', upload.single('avatar'), EmployeeController.festivewear)
router.post('/banarasi', upload.single('avatar'), EmployeeController.banarasi)
router.post('/chenderi', upload.single('avatar'), EmployeeController.chenderi)
router.post('/prited', upload.single('avatar'), EmployeeController.prited)
router.post('/pochampally', upload.single('avatar'), EmployeeController.pochampally)





router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)


module.exports = router