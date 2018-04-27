const User=require('../../models/user');
const UserSession=require('../../models/usersession');
const Projects=require('../../models/projects');
module.exports = (app) => {
  // app.get('/api/counters', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });
  //
  // app.post('/api/counters', function (req, res, next) {
  //   const counter = new Counter();
  //
  //   counter.save()
  //     .then(() => res.json(counter))
  //     .catch((err) => next(err));
  // });
  app.post('/api/account/signup',(req,res,next)=>{

     const{body}=req;
     const{
       firstname,
       lastname,
       username,
       password }=body;
       let {

         email
       }=body;

if(!firstname){

  return res.send(
    {
      success:false,
      message:'Error:missing firstname '
    });
}


if(!lastname){

  return res.send(
    {
      success:false,
      message:'Error:missing lastname '
    });
}

if(!username){

  return res.send(
    {
      success:false,
      message:'Error:missing username '
    });
}

if(!email){

  return res.send(
    {
      success:false,
      message:'Error:missing email '
    });
}

if(!password){

  return res.send(
    {
      success:false,
      message:'Error:missing password '
    });
}

email=email.toLowerCase();

User.find({email: email},(err,previousUsers)=>{

  if(err){
    return res.send(
      {
        success:false,
        message:'Error: Server Error '
      });
  }

  else if(previousUsers.length>0){
    console.log(previousUsers);
    console.log("length",previousUsers.length);
    return res.send(
      {

        success:false,
        message:'Error:email id already exists'
      });

  }
const newUser = new User();
newUser.email=email;
newUser.firstname=firstname;
newUser.lastname=lastname;
newUser.username=username;
newUser.password=newUser.generateHash(password);
newUser.save((err,user)=>{

  if(err){
    return res.send(
      {
        success:false,
        message:'Error: Server Error '
      });

  }else{

  return res.send(
      {
        success:true,
        message:'Signed Up'
      });
  }

})

});



  });
  //console.log("inside");
  app.post('/api/account/signin',(req,res,next)=>{

     const{body}=req;
     const{

       password }=body;
       let {

         email
       }=body;


       if(!email){

         return res.send(
           {
             success:false,
             message:'Error:missing email '
           });
       }

       if(!password){

         return res.send(
           {
             success:false,
             message:'Error:missing password '
           });
         }
           email=email.toLowerCase();
           User.find({email:email},(err,users)=>{
             if(err){
               return res.send(
                 {
                   success:false,
                   message:'Error: Server Error '
                 });
               }
               if(users.length!=1){

                 return res.send(
                   {
                     success:false,
                     message:'Error: Invalid user name/password'
                   });
               }

                 const user=users[0];
                 if(!user.validPassword(password)){
                   return res.send(
                     {
                       success:false,
                       message:'Error: password'
                     });

                 }

      const userSession=new UserSession();
      userSession.userId=user._id;
      userSession.save((err,doc)=>{
        if(err){
          return res.send(
            {
              success:false,
              message:'Error: Server Error '
            });
          }

          return res.send({

            success:true,
            message:"Logged in",
            token:doc._id
          });

      });


           });
       });


app.get('/api/account/logout',(req,res,next)=>{

 const{query}=req;
 const{token}=query;

 UserSession.findOneAndUpdate({
  _id:token,
  isDeleted:false},
  {
$set:{isDeleted:true}


},null,(err,sessions)=>{
  if(err){
    return res.send(
      {
        success:false,
        message:'Error: Server Error '
      });

  }


    return res.send(
      {
        success:true,
        message:'Good'
      });


});



});




app.post('/api/account/Signedup',(req,res,next)=>{

 //   const{body}=req;
 //   const{
 //     UserName,
 //     Submitter,
 //     CoSubmitters,
 //     InnovationTitle,
 //   description,
 //   Product,
 //   Component,
 //   OperatingSystem,
 //   GitLink
 // }=body;
     // let {
     //
     //   email
     // }=body;
let body = req.body;

if(!body || !body.Submitter || !body.CoSubmitters || !body.InnovationTitle || !body.Description || !body.Product|| !body.Component || !body.OperatingSystem || !body.GitLink){
     		return res.send(
          {

            success:false,
            message:'Error:Insufficient information'
          });
     	}


Projects.find({InnovationTitle: body.InnovationTitle},(err,previousUsers)=>{

if(err){
  return res.send(
    {
      success:false,
      message:'Error: Server Error '
    });
}

else if(previousUsers.length>0){
  console.log(previousUsers);
  console.log("length",previousUsers.length);
  return res.send(
    {

      success:false,
      message:'Error:Innovation Title already exists'
    });

}
const newProject = new Projects();
newProject.UserName=body.UserName
newProject.Submitter=body.Submitter;
newProject.CoSubmitters=body.CoSubmitters;
newProject.InnovationTitle=body.InnovationTitle;
newProject.Description=body.Description;
newProject.Product=body.Product;
newProject.Component=body.Component;
newProject.OperatingSystem=body.OperatingSystem;
newProject.GitLink=body.GitLink;

newProject.save((err,user)=>{

if(err){
  return res.send(
    {
      success:false,
      message:'Error: Server Error '
    });

}else{

return res.send(
    {
      success:true,
      message:'project added'
    });
}

})

});



});







};
