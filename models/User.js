const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Utiliser un nom cohérent pour le schéma
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Appliquer le plugin au schéma
userSchema.plugin(uniqueValidator);

// Exporter correctement le modèle en utilisant le schéma
module.exports = mongoose.model('User', userSchema);
