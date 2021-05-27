var allUsers = {};

const fnSidebarName = () => {
    fetch(baseURL + "users/" + localStorage.getItem("sessionuserId"))
        .then(resp => resp.json())
        .then(resp => {
            replaceInnerHTMLById("sidebar-name", resp.name);
        })
}

fnSidebarName();

//Sidebar friend list

const fnSidebarFriendList = () => {
    fetch(baseURL + "users")
        .then(res => res.json())
        .then(res => {
            allUsers = res;
            for (var i = 0; i < res.length; i++) {
                document.querySelector('.sidebar__friend-list').insertAdjacentHTML(
                    'afterbegin',
                    `<div class="friend" onclick="redirectToPostRequestPage(${i})">
                    <img src="../image/avatar6.png" alt="avatar" class="avatar">
                    <div class="friend__info">
                      <h1><span id="friend-name${i}"></span></h1>
                      <p>Last message</p>
                    </div>
                  </div>`
                )
            }
            for (var i = 0; i < res.length; i++) {
                replaceInnerHTMLById("friend-name" + i, res[i].name);
            }
        })
}


fnSidebarFriendList();
