const {Schema, model}=require('mongoose')
usuarioS=new Schema({
    nombre: {type:String, required:true},
    apellido:{type:String, required: false},
    correo: {type:String, required:true},
    contrasena: {type:String, required:true},
    descripcion: {type:String, required:true},
    generos: {type:[String], required:true},
    instrumentos: {type:[String], required:true},
    fecha: {type:String, required:true},
    precio: {type:String, required:true},
    calificacion: {type:String, required:true},
    collab: {type:String, required:true}
},
{
    timestamp:true,
    versionKey: false
})
module.exports=model('Usuario', usuarioS);