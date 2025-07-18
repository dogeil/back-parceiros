const mongoose = require('mongoose');

/*Definindo um Schema de signup*/

const usertempSchema = new mongoose.Schema({
    businessName: { type: String, required: true, },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: Number, required: true, unique: true, },
    personalPhone: { type: Number, unique: true, },
    cnpj: { type: Number, required: true, unique: true, },
    businessType: { type: String, required: true,},
    cep: { type: Number, required: true, unique:false},
    address: { type: String, required: true, },
    password: { type: String, required: true, },
    admin: { type: Boolean, default: false, },
    verificationcode: { type: String, required: true,},
    expiresAt: { type: Date, required: true,},
    expiresAfter: { type: Date, required: true,},
})

/*Exportar a maneiro como ele sera chamo, depois o nome do Schema*/
module.exports = mongoose.model('UserTemp', usertempSchema);