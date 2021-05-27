


const acceptRequest = async () => {
    const url = window.location.href;
    console.log(url)
    const arr = url.split("?")
    console.log(arr);
    const req = {
        "isAccepted": 1
    }
    // console.log(url);
    const res = await fetch(baseURL + "message-request/" + arr[1], putMessageRequest(req));
    window.location.replace("http://127.0.0.1:5500/html/chat.html")
}
