/**
 * Created by sc578 on 5/24/16.
 */
/**
 * User Object Model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:{type:String, unique:true},
    email:String,
    color:String,
    hashed_password:String
});
mongoose.model('User', UserSchema);