const fnSidebarName = () => {
    fetch(baseURL + "users/10001")
        .then(resp => resp.json())
        .then(resp => {
            replaceInnerHTMLById("sidebar-name", resp.name);
        })
}

fnSidebarName();