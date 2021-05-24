const getUserId = () => localStorage.getItem("userId");

const getValueById = (id) => document.getElementById(id).value;

const fnUserUrlBuilder = (param1) => {
  const userId = getUserId();
  return baseURL + "user/" + "10001" + param1;
}

const updateProfile = (userData) => {
  const newData =
  {
    method: "PUT",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return newData;
}

const isPasswordConfirmed = () => getValueById("new-password") === getValueById("confirm-new-password");
const isEmailConfirmed = () => getValueById("new-email") === getValueById("confirm-new-email");