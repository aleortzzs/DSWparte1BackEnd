const usuariosCtrl = []

//con base de datos
const usuario= require('../modelos/usuarios.js')
//con json
//const usuarios=require('../data.json');


usuariosCtrl.getUsuarios= async(req,res)=>{
    const usuarios= await usuario.find()
    res.json(usuarios)
}

usuariosCtrl.createUsuario = async(req, res) => {
    const newUsuario= new usuario(req.body);
    await newUsuario.save();
    res.send({message:'Usuario creado:))))'});
    //console.log(req.body);

}

usuariosCtrl.getUsuario=async(req,res)=>{
    //console.log(req.params);
    const usuarioF=await usuario.findById(req.params.id);
    res.send(usuarioF);
}

usuariosCtrl.deleteUsuario=async(req,res)=>{
    const usuarioF=await usuario.findByIdAndDelete(req.params.id);
    res.send({message: 'usuario eliminado', usuarioF});
}

usuariosCtrl.updateUsuario=async(req,res)=>{
    const usuarioF=await usuario.findByIdAndUpdate(req.params.id,req.body);
    res.send({message: 'se actualizó el usuario', usuarioF});
}



module.exports = usuariosCtrl;

