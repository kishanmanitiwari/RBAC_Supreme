import dummyUsers from "./db.mjs";

function validate(req, res, next) {
  const userInput = req.body?.username;
  req.user = null;

  // //seraching - linear seatch
  // for (let key in dummyUsers) {
  //   if (dummyUsers.hasOwnProperty(key)) {
  //     if (dummyUsers[key].username === userInput) {
  //       req.user = dummyUsers[key]// Attach full user object
  //       break; // Found, exit loop
  //     }
  //   }
  // }
  //Converted databse to array
  for (let obj of dummyUsers) {
    if (obj.username === userInput) {
      req.user = obj;
      break;
    }
  }

  console.log(req.user);

  next(); // Call once, after checking all
}

//send a jwt token
//set a session for the uer
//implement a databse - normal sql or prisma

export default validate;
