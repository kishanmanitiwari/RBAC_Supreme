import roles from "./roles.mjs";

export default function authorize(askingPermssion) { //edit
  return (req, res, next) => {
    const userRole = req.user?.role; // role - admin,editor,user
    //first extract user ka role
    

    //user ke role ke corresponding permision extract kar rhe hai
    const permissionsAllowedArray = roles[userRole] || [];
    //permsion -  user [read]
    //admin - all
    //editor - ["read", "create", "edit"]
    //user - [read]

    console.log(userRole);
    console.log(permissionsAllowedArray);
    
    

        
    if (permissionsAllowedArray.includes(askingPermssion)==false) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
}
