
var replyButton = document.getElementById("message_reply_option");

var friends = document.getElementsByClassName("friend");
for (var i = 0; i < friends.length; ++i) {
  friends[i].addEventListener("click", (e) => {
    document.getElementById("friend-name").innerHTML =
      e.currentTarget.children[1].children[0].innerHTML;
  });
}

var messages = document.getElementsByClassName("message");
for (var i = 0; i < messages.length; ++i) {
  messages[i].addEventListener("mouseover", (e) => {
    e.currentTarget.children[2].style.display = "block";
  });

  messages[i].addEventListener("mouseout", (e) => {
    e.currentTarget.children[2].style.display = "none";
  });
}

var dropdowns = document.getElementsByClassName("dropdown-arrow");
for (var i = 0; i < dropdowns.length; ++i) {
  dropdowns[i].addEventListener("click", (e) => {
    e.preventDefault();
    replyButton.removeAttribute("hidden");
    replyButton.style.position = "absolute"
    replyButton.style.top = e.pageY + "px"
    replyButton.style.left = e.pageX + "px"
    replyButton.style.backgroundColor = "white"
    replyButton.style.cursor = "pointer"
  });
}
