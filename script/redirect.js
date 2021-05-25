var userNumber;

const redirectToPostRequestPage = (i) => {
    userNumber = i;

    fetch(baseURL + "message-request/10005/" + allUsers[i].userId)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.isAccepted == '0' || res == null)
                window.location.replace("http://localhost:5500/html/post-request.html")
            else window.location.replace("http://localhost:5500/html/chat.html")
        });
}