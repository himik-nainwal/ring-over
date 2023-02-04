const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
 async  login(req, res, next) {
    try{
      const {email,password}=req.body;
      let user;
      if(email){
        user = await User.findOne({email:email.toLowerCase()}).select("+password");
        if(!user) return res.status(401).json({message : "Invalid Credentials"});
      }

      if(!await bcrypt.compare(password,user.password)) return res.status(401).json({message: "Invalid Credentials"});
      
      const loggedUser = await User.findById(user._id);

      jwt.sign({
        type: loggedUser.role || 'user',
        userId : loggedUser._id,
      },process.env.SECRET,{expiresIn:"7d"},(err,token) =>{
          if(err) throw err;
          return res.status(200)
          .json({success : true, user :loggedUser,token});
      }
      );
    }catch(error){
      console.error(error);
      return res.status(500).json({message : "m Server Error"});
    }
  },
  async register(req, res, next) {
    try{
      const { name,email,password, role} = req.body;
      
      const user = await User.findOne({email: email.toLowerCase()});
      if(user) return res.status(401).json({message : "Email already registered"});
      const saveUser = {
          name,
          email: email.toLowerCase(),
          password: await bcrypt.hash(password, 10),
        
      }
      if(role) saveUser.role=role;
      const newUser=await new User(saveUser).save();
      
      jwt.sign({
        type: role || 'user',
        userId : newUser._id,
      },process.env.SECRET,{expiresIn:"7d"},(err,token) =>{
          if(err) throw err;
          return res.status(201)
          .json({success : true, user :newUser,token});
      }
      );
    } catch(error){
      console.error(error);
      return res.status(500).json({message : "Internal Server Error"});
    }
  },
  async userData(req, res, next) {
    if (!req.body.token) {
      return res.status(400).send({ status: "error", message: "Token is missing in the request body" });
    }
    try {
      const token = req.body.token;
      const decoded = jwt.verify(token, process.env.SECRET);
      const id = decoded.userId;
      const user = await User.findOne({ _id: id });
      if (!user) {
        return res.status(404).send({ status: "error", message: "User not found" });
      }
  
      res.status(200).send({ status: "ok", data: user });
    } catch (error) {
      console.error(error);
      return res.status(401).send({ status: "error", message: "Invalid token" });
    }
  },

  async requests(req,res,next){
    const { email, request } = req.body;
    const { jobId, resumeLink, companyName } = request;
  
    try {
      const user = await User.findOne({ email });
      if (user) {
        const duplicateRequest = user.requests.find(
          (request) => request.jobId === jobId && request.companyName === companyName
        );
        if (duplicateRequest) {
          return res.status(400).json({
            message: 'You have already applied for this job.',
          });
        }
        user.requests.push({ jobId, resumeLink, companyName });
        await user.save();
      } else {
        const newUser = new User({
          email,
          requests: [{ jobId, resumeLink, companyName }],
        });
        await newUser.save();
      }
      return res.json({ message: 'Request saved successfully.' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};