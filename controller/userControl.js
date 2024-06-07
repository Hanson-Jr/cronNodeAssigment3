// const User = require ("../models/users")

// exports.submit = async (req, res)=>{
//   try{
//     // const {UserName, Email, DateOfBirth} = req.body;
//     // const User = ({UserName, Email, DateOfBirth})
//     // const NewUser = await User.save ();
//     // res.render("Success")
//     const NewUser = await User.save({
//       UserName: req.body.UserName,
//       Email: req.body.Email,
//       DateOfBirth: req.body.DateOfBirth,
//       Name: req.body.Name
//     })
      
//     res.status(201).json({
//       Status: "Sccuess",
//       Data:{
//         User: NewUser
       
//       }
//     })
//   }
//   catch(err){
//     res.status(401).send("err")
   
//   }
  
// }

// exports.homepage = async (req,res)=>{
//   try{
//     res.render("")
//   }
//   catch(err){
//     res.status(404).json({
//       message: "Page not found!"
//     })
//   }
// } 

// const newUser = await User.create(req.body);
// res.status(201).json({
//   status: "success", 
//   Data: {
//     User: newUser
//   }
// })

// } 
// catch(err){
//   res.status(402).send(err)
// }
//   }


// exports.submit = async (req, res)=>{
//   try{
//     const {Username, Email, DateofBirth} = req.body
//     const User = ({Username, Email, DateofBirth})
//     const NewUser = await User.save();

//     res.status(201).json({
//       Data: {
//         NewUser
//       };
//       res.render("index")
//     })
//   }
    // const {UserName, Email, DateOfBirth} = req.body;
    // const User = ({UserName, Email, DateOfBirth})
    // const NewUser = await User.save ();
    // res.render("Success")