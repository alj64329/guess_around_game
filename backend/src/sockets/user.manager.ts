//user map
const users: Record<string, string> = {};

//Add new user
export const addUser = (socketId: string, username: string) => {
  users[socketId] = username;
};

//delete user
export const deleteUser = (socketId: string) => {
  delete users[socketId];
};

//get username by socket id
export const getUsername = (socketId: string) => {
  return users[socketId];
};

//get all users
export const getAllUsers = () => {
  return Object.values(users);
};
