const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const Colec = require('../models/colec');
const Item = require('../models/Item');
const Tag = require('../models/Tag');
const Coment = require('../models/Coment');
const Like = require('../models/Like');
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

            const user = new User({login,password,Admin:'Aut',Ban:'false'})

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
        if (user.Ban=='true') { return res.status(400).json({ message:'пользователь заблокирован'})}
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

        const user = await User.findOne({_id:req.body.ev})
        console.log(user)
        if (user.Ban=='false'){    await user.update({Ban:'true'})} else { await user.update({Ban:'false'})}

    } catch(e){
        res.status(500).json({message: 'error ban'})
    }
})


router.post('/GoAdm', async(req,res) =>{

    try{

        const user = await User.findOne({_id:req.body.ev})
        console.log(user)
        if (user.Admin=='Adm'){    await user.update({Admin:'Aut'})} else { await user.update({Admin:'Adm'})}
        console.log(user)
    } catch(e){
        res.status(500).json({message: 'error ban'})
    }
})



router.post('/IsBan', async(req,res) =>{

    try{

        const user = await User.findOne({_id:req.body.us})


        return res.json({
            user
        });
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


        const user = await User.findOne({_id:req.body.ev})
       user.delete()
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




router.post('/adcol',[check('nam','введите название').exists(),check('disk','введите описание').exists(),check('tem','введите тему').exists() ], async(req,res) =>{

    try{

        const errors = validationResult(req.body)
        if (!errors.isEmpty()) { return res.status(400).json({
            errors:errors.array(),message:'некорректные данные'
        })}

        const {nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3} = req.body

console.log(req.body)
        const colec = new Colec({nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3, owner: req.body.id})

        await colec.save()
        res.status(201).json({message:' добавлена'})
    } catch(e){
        res.status(500).json({message: 'error on add'})
    }
})

router.post('/Chencol',[check('nam','введите название').exists(),check('disk','введите описание').exists(),check('tem','введите тему').exists() ], async(req,res) =>{

    try{

        const {nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3} = req.body

        const colec = await Colec.findOne({_id:req.body.id})
        await colec.update({nam,disk,tem,pict,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3})
    } catch(e){
        res.status(500).json({message: 'error on add'})
    }
})



router.post('/ToCabCol', async(req,res) =>{

    try{


        const coleks = await Colec.find(  { owner: req.body.us } , { nam:1 , disk:1 ,tem:1})


        res.json(coleks)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/ColForItm', async(req,res) =>{

    try{

        const coleks = await Colec.find({ _id: req.body.us }  , { nam:1 , disk:1 ,tem:1 ,intgr1:1,intgr2:1,intgr3:1,Cstr1:1,Cstr2:1,Cstr3:1,Cdate1:1,Cdate2:1,Cdate3:1,Ctxt1:1,Ctxt2:1,Ctxt3:1,Cbol1:1,Cbol2:1,Cbol3:1})

        res.json(coleks)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/ColUp', async(req,res) =>{

    try{

        const coleks = await Colec.find({ _id: req.body.us })
        res.json(coleks)

    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/ToItm', async(req,res) =>{

    try{

        const {nazv,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3,id} = req.body

        const thisD = new Date();
        const item = new Item({nazv,dat: thisD,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3, owner: id})

             await item.save()
   const d =   item._id
     for (var i = 1; i < req.body.tags.length; i++) {

           const na = '#'+req.body.tags[i]
        const tag = new Tag({nam:na, owner: d })

         await tag.save()
     }

        console.log(item)
        res.json("добавлен")

    } catch(e){
        res.status(500).json({message: 'error ToItem'})
    }
})


router.post('/ChangeItem', async(req,res) =>{

    try{
        const {nazv,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3,id} = req.body
        const item = await Item.findOne(  { _id: id } )

        await item.update({nazv,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3})


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


        const Finl = items.concat(teg);



        res.json(Finl)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})




router.post('/GetItmSearchtag', async(req,res) =>{

    try{


        const items = await Item.find(  { _id: req.body.us } )

        const col = await Colec.find(  { _id:items[0].owner } )
        const usr = await User.find(  { _id:col[0].owner } )

        const teg = await Tag.find(  { owner: items[0]._id } )

        const PreFinl = items.concat(usr);

        const Finl = PreFinl.concat(teg);



        res.json(Finl)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})




router.post('/InCom', async(req,res) =>{

    try{
console.log(req.body)
        console.log('InComInComInComInComInComInComInComInComInComInComInCom')
        const d = new Date();
const coment = new Coment({nam:req.body.com.nam,comen:req.body.com.comen,dat:d.toDateString(),owner:req.body.com.id} )
        await coment.save()

    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/InLike', async(req,res) =>{

    try{
        console.log('InLikeInLikeInLikeInLikeInLikeInLikeInLikeInLikeInLike')
    console.log(req.body.lkin)
        const Flike = await Like.findOne({nam:req.body.lkin.nam,owner:req.body.lkin.id})

        if (!Flike) {const like = new Like({nam:req.body.lkin.nam,owner:req.body.lkin.id})
            console.log("here we go to add")
            await like.save()}   if (Flike) {
            await Flike.remove()
            console.log("here we go to del")
        }



    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/OutLike', async(req,res) =>{

    try{


        const likes = await Like.find(  { owner: req.body.d } )

        res.json(likes.length)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/OutCom', async(req,res) =>{

    try{


        const coments = await Coment.find(  { owner: req.body.d } )
        res.json(coments)
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/UsGet', async(req,res) =>{

    try{
        const users = await User.find({});

        return res.json({
            users
        });

    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})

router.post('/IsearchOnTag', async(req,res) =>{

    try{
        const array1 = [];
        const tags = await Tag.find({nam:req.body.us} , { owner:1,_id:0 });

        for (var i = 0; i < tags.length; i++) {

            const itms = await Item.find({_id:tags[i].owner});

      array1.push(itms[0])

        }
        return res.json({
            array1
        });
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})



router.post('/IloadTags', async(req,res) =>{

    try{


        const array1 = [];
        const tags = await Tag.find({});

        for (var i = 0; i < tags.length; i++) {

if (!array1.includes(tags[i].nam)){
    array1.push(tags[i].nam)
}
        }

        return res.json({
            array1
        });
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


router.post('/FindBiggest', async(req,res) =>{

    try{


        const cols = await Colec.find({})
        var id
        var coun = 0;

        for (var i = 0; i < cols.length; i++) {
            const item = await Item.find({owner:cols[i]._id})

            if (coun<item.length) {coun=item.length
            id =cols[i]._id }
        }
const col =  await Colec.find({_id:id})
        return res.json({
            col
        });
    } catch(e){
        res.status(500).json({message: 'error FindBigest'})
    }
})



router.post('/IfindLast', async(req,res) =>{

    try{
console.log('IfindLast')
        var id
        var coun;
        const items = await Item.find({})
        console.log(items.length)
        if (items.length!=0){
        var coun =items[0].dat ;
        for (var i = 0; i < items.length; i++) {
        if (items[i].dat>coun) {
            console.log(items[i].dat )
            coun=items[i].dat
            id=items[i]._id
        }
        }

        const itm =  await Item.find({_id:id})
        return res.json({
            itm
        });}
        const itm = 'nothing'
        return res.json({
            itm
        });
    } catch(e){
        res.status(500).json({message: 'error Findlast'})
    }
})


router.post('/WegoDel', async(req,res) =>{

    try{
        console.log('WegoDelWegoDelWegoDelWegoDelWegoDelWegoDelWegoDelWegoDelWegoDelWegoDelWegoDel')
        const item = await Item.findOne({_id:req.body.ev})
        item.delete()
    } catch(e){
        res.status(500).json({message: 'error Col'})
    }
})


module.exports = router;