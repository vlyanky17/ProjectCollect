const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const Colec = require('../models/colec');
const Item = require('../models/Item');
const Tag = require('../models/Tag');
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const {Router} = require ('express')
const router = express.Router();
const auth = require('../middleware/auth.middleware')

router.post('/register',
    [
        check('password', 'Минимальная длина 3')
            .isLength({ min: 3 }),        check('login', 'Минимальная длина 3')
        .isLength({ min: 3 })
    ], async(req,res) =>{
        try{


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

            const user = new User({login,password,Admin:'Aut'})

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

        const {login, password} = req.body

        const user = await User.findOne({login})

        if (!user) { return res.status(400).json({message:' user not found'})}

        if (user.password!=password) { return res.status(400).json({ message:'неверный пароль'})}

        const d = new Date();
        await user.update({datLog:d.toDateString()})
        console.log(user)
        console.log("||||||||||||||||||||||||||||")
        console.log(user.login)

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSek'),
            { expiresIn: '1h' }
        )
        console.log(token)
        res.json({token,userId:user.id,userAdm:user.Admin,userlogin:user.login})





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
router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { name, position, company } = req.body;

    const newUser = new User({
        position,
        name,
        company,
        date: Date.now()
    });
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            position,
            company
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});


router.get('/users', async (req, res) => {

    try {
        const users = await User.find({});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});


router.post('/adcol',auth, async(req,res) =>{

    try{

        const {nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3} = req.body
        console.log(req.user.userId)
        const colec = new Colec({nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3, owner: req.user.userId})
console.log(colec)
        await colec.save()
        res.status(201).json({message:' добавлена'})
    } catch(e){
        res.status(500).json({message: 'error add'})
    }
})


router.post('/ToCabCol', async(req,res) =>{

    try{
console.log(req.body)

        const coleks = await Colec.find(  { owner: req.body.us } , { nam:1 , disk:1 ,tem:1})

console.log(coleks)
        res.json(coleks)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/ColForItm', async(req,res) =>{

    try{

        const coleks = await Colec.find({ _id: req.body.us }  , { nam:1 , disk:1 ,tem:1 ,intgr1:1,intgr2:1,intgr3:1,Cstr1:1,Cstr2:1,Cstr3:1,Cdate1:1,Cdate2:1,Cdate3:1,Ctxt1:1,Ctxt2:1,Ctxt3:1,Cbol1:1,Cbol2:1,Cbol3:1})
        console.log(coleks)
        res.json(coleks)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/ColUp', async(req,res) =>{

    try{
        console.log(req.body)
        const coleks = await Colec.find({ _id: req.body.us })
        res.json(coleks)

    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/ToItm', async(req,res) =>{

    try{

        const {nazv,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3,id} = req.body


        const item = new Item({nazv,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3, owner: id})
        console.log(item)
        await item.save()
    const d =   item._id
        for (var i = 1; i < req.body.tags.length; i++) {
            console.log(i);
            const na = '#'+req.body.tags[i]
            const tag = new Tag({nam:na, owner: d })
            console.log(tag)
            await tag.save()
        }
        res.json("добавлен")

    } catch(e){
        res.status(500).json({message: 'error ToItem'})
    }
})


router.post('/ItemUp', async(req,res) =>{

    try{


        const items = await Item.find(  { owner: req.body.us } )
        res.json(items)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})



router.post('/GetItm', async(req,res) =>{

    try{


        const items = await Item.find(  { _id: req.body.us } )
        const teg = await Tag.find(  { owner: items[0]._id } )

        console.log(teg)
        const Finl = items.concat(teg);

        console.log(Finl)

        res.json(Finl)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

module.exports = router;