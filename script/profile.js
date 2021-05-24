// All user profile update code goes here.

/**
 * @author Shubham Chaudhary
 */

const fnUpdateNameHandler = () => {
  const userData = {
    name: getValueById("new-name")
  }
  const URL = fnUserUrlBuilder("/name")
  fetch(URL, updateProfile(userData))
    .then(res => res.json())
    .then(res => alert("Successfully changed profile"))
    .then(() => redirectToProfilePage())
    .catch(err => console.error(err));
}
