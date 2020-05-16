import Login from "../components/Login";
import Register from "../components/Register";
import Todo from "../components/Todo/Todo";

const allPath = {
  login: { path: "/login", component: Login },
  register: { path: "/register", component: Register },
  todo: { path: "/todo", component: Todo },
};

const userRole = {
  guest: { havePaths: [allPath.login, allPath.register], redirect: "/login" },
  member: { havePaths: [allPath.todo], redirect: "/todo" },
};

export default userRole;
