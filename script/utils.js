
const baseURL = "http://localhost:8080/api/";

const getUserId = () => localStorage.getItem("userId");

const getValueById = (id) => document.getElementById(id).value;
const replaceInnerHTMLById = (id, data) => document.getElementById(id).innerHTML = data;

const fnUserUrlBuilder = (param1) => {
  const userId = getUserId();
  return baseURL + "user/" + "10001" + param1;
}

const redirectToProfilePage = () => window.location.replace("http://localhost:5500/html/profile.html")


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