const users = require("./users-1");
const hello = require("./hello");

const userData = users();

hello(userData.user1);
