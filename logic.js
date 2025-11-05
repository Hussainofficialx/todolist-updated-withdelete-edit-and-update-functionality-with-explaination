var ul = document.getElementById("ul");
var todoInput = document.getElementById("todoInput");
var btn = document.getElementById("btn");
var dAllBtn = document.getElementById("d-all");
var targetId = undefined;

if (ul.children.length == 0) {
  dAllBtn.disabled = true;
}

function deleteItem(id) {
  // console.log("Li Id: ", id);
  console.log("Li element with the id " + id + " has been removed");

  var targetLi = document.getElementById(id);
  // console.log(targetLi);

  ul.removeChild(targetLi);
}

function updateItem() {
  console.log("Target Id :", targetId);

  var newValue = todoInput.value;
  var targetLi = document.getElementById(targetId);
  targetLi.children[0].innerHTML = newValue;
  todoInput.value = "";
  btn.removeAttribute("onclick");
  btn.innerText = "Add Item";
  btn.setAttribute("onclick", "addItem()");
  targetId = undefined;
}

function editItem(id) {
  // console.log("Li Id: ", id);

  targetId = id;

  var targetLi = document.getElementById(id);
  var liText = targetLi.children[0].innerHTML;
  // console.log(liText);

  todoInput.value = liText;

  // Update item functionality...!
  btn.removeAttribute("onclick");
  btn.innerText = "Update Item";
  btn.setAttribute("onclick", "updateItem()");
}

function addItem() {
  var inputValue = todoInput.value;
  var li = document.createElement("li");

  var span = document.createElement("span");
  var spanText = document.createTextNode(inputValue);
  span.appendChild(spanText);

  var randomNum = Math.floor(Math.random() * 10000);
  var id = new Date().getTime() + randomNum;
  id = id.toString();
  // console.log("Id: ", id);

  li.setAttribute("id", id);

  var delBtn = document.createElement("button");
  var delBtnText = document.createTextNode("Delete Item");
  delBtn.appendChild(delBtnText);
  delBtn.setAttribute("onclick", "deleteItem(" + id + ")");

  var editBtn = document.createElement("button");
  var editBtnText = document.createTextNode("Edit Item");
  editBtn.appendChild(editBtnText);
  editBtn.setAttribute("onclick", "editItem(" + id + ")");

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(editBtn);

  ul.appendChild(li);
  todoInput.value = "";

  dAllBtn.disabled = false;
}

function deleteAll() {
  ul.innerHTML = "";
  dAllBtn.disabled = true;
}
