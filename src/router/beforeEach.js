import { AuthStore } from "../stores/Auth";

export default (to, from, next) => {
  const auth = AuthStore();
  const user = auth.getUser;

  if (user.username == null) {
    auth.buscarUserLocalStorage();
  }

  return next();
};
