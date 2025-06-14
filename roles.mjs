const roles = {
  user: ["read"],
  editor: ["read", "create", "edit"],
  admin: ["read", "create", "edit", "delete", "manage"],
};

export default roles;