


//=====================================
//           POST USER  1
//=====================================


function saveUser(req, res){
  let body = req.body

  const user = new User({
    name: body.name,
    phone: body.phone,
    email: body.email,
    password: body.password
  })

 user.save( (err, userDB)=>{
   if(err){
    return res.status(500).json({
       ok: false,
       message:' error DB',
       err
     })
   }

   if(!userDB){
    return res.status(401).json({
       ok: false,
       message: 'Error user to save',
        err
     })
   }

   res.status(200).json({
     ok: true,
     message:' User saved DB',
     userDB

   })

 });

}




const saveUser = async (req, res) =>{

  const {name, email, password, phone} = req.body

  const user = new User(req.body)

  await user.save( (err, userDB) =>{
    if(err){
      return res.status(500).json({
         ok: false,
         message:' error DB',
         err
       })
     }
  
     if(!userDB){
      return res.status(401).json({
         ok: false,
         message: 'Error user to save',
          err
       })
     }
  
     res.status(200).json({
       ok: true,
       message:' User saved DB',
       userDB
  
     })
  })


}


const saveUser = async (req, res) =>{

  const {name, email, password, phone} = req.body

  const user = new User(req.body)

try {

  await user.save();
  return res.status(200).json({
    ok: true,
    message:' User saved DB',
    user
    

  })
  
} catch (error) {

  return res.status(500).json({
    ok: false,
    message:' error DB',
    err: error
  })
  
}


}

