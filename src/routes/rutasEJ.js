const {Router}=require('express');
const router=Router();
/* podemos utilizar ese^^^^ o este vvvvvv
    const express=require(express);
    const router=express.Router();
*/

/*
    manera anterior
        //rutas  
            //general
        router.get('/',(req,res)=>{
            res.send('sí funciona:D');
        });
            //home
        router.get('/home',(req,res)=>{
            res.send('estás en la página principal');
        });
            //zapatos
        router.get('/zapatos',(req,res)=>{
            res.send('este es listado de los zapatos');
        });
            //general usando json
        router.get('/',(req,res)=>{
            res.json({'name': "lana del rey"});
        });
            //luego lo haremos de otra manera utilizando archivos
                //send es solo para datos tipo string

        //exportar archivo
        module.exports=router;
*/
    //manera en q lo haremos
const games = require('./data.json');
router.get('/',(req,res)=>{
    res.json(games);
});
    
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    games.forEach(game => {
        if(game.id == id)
            res.json(game);
    });
});
    
router.post('/',(req,res)=>{
    const {title,version,genre}= (req.body);
    if(title && version && genre){
        const id = games.length +1;
        const newGame = {...req.body,id};
        games.push(newGame);
        //console.log(newGame);
        res.send(games);
    }
    else
        res.status(500).json({"error":"no data"});
});
module.exports = router;
    
