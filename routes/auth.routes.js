
const {Router} = require ('express')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


router.post('/register',
    [
    check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина 3')
            .isLength({ min: 3 }),        check('login', 'Минимальная длина 3')
        .isLength({ min: 3 })
    ], async(req,res) =>{
 try{

     System.err.println("?????????????????????????????????????????????????????????????????????????????????????");
     console.log(req.body)
const errors = validationResult(req)
if (!errors.isEmpty()) { return res.status(400).json({
	errors:errors.array(),message:'некорректные данные регистрации'
})}

  const {login,password,email} = req.body

  const candidate =  await User.findOne({login})

const d = new Date();
  if (candidate) {
  return	res.status(400).json({message:' Логин занят'})
  }

     const user = new User({login,password,email,datReg:d.toDateString(),datLog:d.toDateString(),stat:'not banned'})

await user.save()

res.status(201).json({message:' user added'})


 } catch(e){
     console.log('rout err')

 	res.status(500).json({message: 'error register'})

 }
})




router.post('/login',[check('login','введите логин').exists(),check('password','введите пароль').exists() ], async(req,res) =>{

 try{
     console.log(req.body)
const errors = validationResult(req.body)
if (!errors.isEmpty()) { return res.status(400).json({
	errors:errors.array(),message:'некорректные данные авторизации'
})}
     console.log('try1')
 const {login, password} = req.body
     console.log('try2')
const user = await User.findOne({login})
     console.log('try3')
if (!user) { return res.status(400).json({message:' user not found'})}
     console.log('try4')
if (user.password!=password) { return res.status(400).json({ message:'неверный пароль'})}
     if (user.stat=="banned") { return res.status(400).json({ message:'пользователь заблокирован'})}
     const d = new Date();
     await user.update({datLog:d.toDateString()})
     console.log('try5')
     const token = jwt.sign(
         { userId: user.id },
         config.get('jwtSek'),
         { expiresIn: '1h' }
     )
     console.log('try6')
res.json({token,userId:user.id})
     console.log('try7')




     console.log('try8')

 } catch(e){
 	res.status(500).json({message: 'error login'})
 }
})


router.post('/allLog', async(req,res) =>{

    try{
        const user = await User.find()
        console.log(user)
        const d = new Date();


        res.json(user)
        const [users, setUsers] = useState([])
        setUsers(req.body)
        console.log(users)





        console.log('try8')

    } catch(e){
        res.status(500).json({message: 'error all'})
    }
})


router.post('/ban', async(req,res) =>{

    try{

        let i=0;

        while (true){
            try {
                const {login, val} = req.body[i]
                console.log(i)
                if (val==true) {
                    const user = await User.findOne({login})
                    console.log(user)
                     await user.update({stat:'banned'})
                    console.log('ban')}
                i++
            }catch (e) {

                break
            }
        }


        res.status(201).json({message:' users banned'})


    } catch(e){
        res.status(500).json({message: 'error ban'})
    }
})


router.post('/antiban', async(req,res) =>{

    try{

        let i=0;

        while (true){
            try {
                const {login, val} = req.body[i]
                console.log(i)
                if (val==true) {
                    const user = await User.findOne({login})
                    console.log(user)
                    await user.update({stat:'not banned'})
                    console.log('ban')}
                i++
            }catch (e) {

                break
            }
        }
        res.status(201).json({message:' users not banned'})


    } catch(e){
        res.status(500).json({message: 'error all'})
    }
})


router.post('/delet', async(req,res) =>{

    try{

        let i=0;

        while (true){
            try {
                const {login, val} = req.body[i]
                console.log(i)
                if (val==true) {
                    const user = await User.findOne({login})
                    console.log(user)
                    await user.remove()
                    console.log('ban')}
                i++
            }catch (e) {
                break
            }
        }
        res.status(201).json({message:' users delete'})


    } catch(e){
        res.status(500).json({message: 'error all'})
    }
})


module.exports = router