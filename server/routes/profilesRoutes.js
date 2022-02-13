const mongoose = require("mongoose");
const { updateOne } = require("../models/Profiles");
const Profile = mongoose.model("profiles");
var bcrypt = require("bcryptjs");

// checkUsernameEmail = (req, res, next) => {
//   // Check username
//   Profile.findOne({
//     username: req.body.username
//   }).exec((err, profile) => {
//     if (err) {
//       res.status(500).send({message: err});
//       return;
//     }
//     if (profile) {
//       res.status(400).send({message: "Failed! Username is already in use!"});
//       return;
//     }
//     // Check email
//     Profile.findOne({
//       email: req.body.email
//     }).exec((err, profile) => {
//       if (err) {
//         res.status(500).send({message: err})
//         return;
//       }
//       next();
//     })
//   })
// }

const profileRoutes = (app) => {
  
  // app.get(`/profile/data`, async (req, res) => {
  //   const profiles = await Profile.find();

  //   return res.status(200).send(profiles);
  // });

  // app.post('/profile/data', async (req, res) => {

  //   const newData = new Profile({
  //     bloodpressure: req.body.bloodpressure,
  //     bloodsugar: req.body.bloodsugar
  //   })

  //   newData.save();

  //   return res.status(201).send("Data succesfully updated");
  // })

  // app.patch(`/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Profile.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     profile,
  //   });
  // });

  // app.delete(`/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Profile.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     profile,
  //   });
  // });

  // Login and register API
  // Register new account - works in postman
  app.post(`/register`, async (req, res) => {
    const newProfile = new Profile({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
  })

  newProfile.save((err, profile) => {
    if (err) {
      res.status(500).send({message: err});
      return;
    }
  });

  return res.status(201).send("Profile succesfully created");
  });

  // Login to an account - works in postman for username only
  app.post(`/login`, async (req, res) => {
    
    const query = {username: req.body.username};

    // const options = {
    //   projection: {_id: 0, username: 1, firstname: 1, lastname: 0, email: 0, password: 0 },
    // };

    const login = await Profile.findOne(query);
    return res.status(200).send(login)
    // Profile.findOne({
    //   username: req.body.username 
    // }).exec((err, profile) => {
    //   if (err) {
    //     res.status(500).send({message: "Profile Not Found."})
    //   }
      // var passwordIsValid = bcrypt.compareSync(
      //   req.body.password,
      //   Profile.password
      // );
      // if (!passwordIsValid) {
      //   return res.status(401).send({message: "Invalid Password!"})
      // }
      // res.status(200).send({
      //   id: Profile.id,
      //   username: Profile.username,
      //   email: Profile.email
      // });
      // console.log(Profile.id, "Login data")
    // })
  
  });

  // Logout an account - works in postman
  app.post(`/logout`, async (req, res) => {
    try {
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  });

  // Access to users content - works in postman
  app.get(`/profile/:id`, async (req, res) => {
    console.log(req.body.username, "Login data")
    const query = {_id: req.params.id};
    const profiles = await Profile.findOne(query);

    return res.status(200).send(profiles);
  });

};

module.exports = profileRoutes;

// const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).send("Incorrect email or password");
//     }

//     const profiles = await Profile.findOne({email}).select('+password');

//     if (!profiles || !(await profiles.isPasswordMatch(password, profiles.password))) {
//       return res.status(400).send("Incorrect email or password")
//     }

//     return res.status(200).send(profiles);
