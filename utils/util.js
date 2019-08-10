
var lib ={
 password_hash:(password)=>{
    var crypto = require('crypto');
    var  hash = crypto.createHash('sha256').update(password).digest('base64');
  return hash
  },
   getPassword:()=>{
    return '1111'
  },
   getUserName:(phone)=>{
    return phone
  }
} 

module.exports=lib;