var userNum;

const redirectToPostRequestPage = (i) => {
  userNum = i;
  fetch(baseURL + "message-request/10005/" + allUsers[i].userId)
    .then(res => res.text())
    .then(res => {
      if (res === "")
        window.location.replace("C:/Users/Rohit/Documents/Projects/onlineChatFe/html/post-request.html?" + userNum + "?" + 0)
      else {
        const jsonObj = JSON.parse(res);
        console.log(jsonObj);
        if (jsonObj.isAccepted === 0)
          window.location.replace("C:/Users/Rohit/Documents/Projects/onlineChatFe/html/post-request.html?" + userNum + "?" + 1)
        else {
          // alert("redirecting to chat.html");
          window.location.replace("C:/Users/Rohit/Documents/Projects/onlineChatFe/html/chat.html?" + userNum + "?" + 1)
        }
      }
    });


}
