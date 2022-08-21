const userStorage = localStorage.getItem("user");
const setUserStorage = (user) => localStorage.setItem("user", user);
const removeUserStorage = () => localStorage.removeItem("user")

export {userStorage, setUserStorage, removeUserStorage}
