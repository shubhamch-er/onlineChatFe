const fnGetProfile = () => {
    fetch(baseURL + "users/10001")
        .then(resp => resp.json())
        .then(resp => {
            replaceInnerHTMLById("name", resp.name);
            replaceInnerHTMLById("email", resp.email);
            replaceInnerHTMLById("dob", resp.dob);
            // console.log(resp);
        })
}

fnGetProfile();
