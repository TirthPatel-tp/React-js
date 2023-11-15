var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Tirthishero'


const fetchuser = (req,res,next)=>{
    
    const token = req.header('auth-token'); // getting token and authorising it 
    if(!token){
        res.status(401).send({error: "please authenticate using valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET); // verifing token using token and our secret code
        req.user =data.user; // giving data to user if verify is valid
        next(); // then passing to next part
    } catch (error) {
        res.status(401).send({error: "please authenticate using valid token"})
       
    }
   
}

module.exports = fetchuser;