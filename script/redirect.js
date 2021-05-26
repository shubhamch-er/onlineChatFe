var userNum;

const redirectToPostRequestPage = (i) => {
    userNum = i;
    fetch(baseURL + "message-request/10001/" + allUsers[i].userId)
        .then(res => res.text())
        .then(res => {
            if (res === "") {
                fetch(baseURL + "message-request/" + allUsers[i].userId + "/10001")
                    .then(res1 => res1.text())
                    .then(res1 => {
                        console.log(res1);
                        if (res1 === "")
                            window.location.replace("http://localhost:5500/html/post-request.html?" + userNum + "?" + 0);
                        else {
                            const jsonObj = JSON.parse(res1);
                            console.log(jsonObj.requestId)
                            if (jsonObj.isAccepted === 0)
                                window.location.replace("http://localhost:5500/html/put-request.html?" + jsonObj.requestId)
                            else {
                                // alert("redirecting to chat.html");
                                window.location.replace("http://localhost:5500/html/chat.html")
                            }
                        }
                    }
                    )
            }
            else {
                const jsonObj = JSON.parse(res);
                console.log(jsonObj);
                if (jsonObj.isAccepted === 0)
                    window.location.replace("http://localhost:5500/html/post-request.html?" + userNum + "?" + 1)
                else {
                    // alert("redirecting to chat.html");
                    window.location.replace("http://localhost:5500/html/chat.html")
                }
            }
        });


}
