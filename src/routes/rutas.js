const {Router}=require('express');
const router=Router();

//RECETAS
    //const recetas = require('./data.json');
    const usuariosCtrl = require('../controllers/usuario.controller');
    //GETS
    router.get('/usuarios/',usuariosCtrl.getUsuarios);

    router.get('/usuarios/:id',usuariosCtrl.getUsuario);

    router.delete('/:id', usuariosCtrl.deleteUsuario);

    //router.put('/:id',usuariosCtrl.updateUsuario);

    router.post('/crear/',usuariosCtrl.createUsuario);

        /*router.post('/recetas/nuevareceta',(req,res)=>{
            const {id,nombre,ingredientes,status,tipo,cantidad,precios}= (req.body);
            if(id&&nombre&&ingredientes&&status&&tipo&&cantidad&&precios){
                const id = recetas.length +1;
                const newReceta = {...req.body,id};
                recetas.push(newReceta);
                res.send(recetas);
            }
            else
                res.status(500).json({"error":"no data"});
        });*/
    //PUTS

    //DELETES

//MENU DEL DIA
    const menudeldia = require('./data2.json');
    //GETS
        router.get('/menudeldia',(req,res)=>{
            res.json(menudeldia);
        });
    //PUTS

    //POSTS
        router.post('/menudeldia/nuevomenu',(req,res)=>{
            const {desayuno,comida,postre,entrada,bebida}= (req.body);
            if(desayuno&&comida&&postre&&entrada&&bebida){
                const id = menudeldia.length +1;
                const newMenu = {...req.body,id};
                menudeldia.push(newMenu);
                res.send(menudeldia);
            }
            else
                res.status(500).json({"error":"no data"});
        });
    //DELETE
module.exports = router;