let SideNav = document.querySelector(".SideNav");
if (SideNav) {
  Navigation.addEventListener("click", openNavBar);
  exitNav.addEventListener("click", openNavBar);
}

function openNavBar(e) {
  SideNav.classList.toggle("active");
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function check(form) {
  if (form.usrnm.value == "Yonit" && form.psw.value == "yonit123") {
    // window.location.replace("index.html");
    window.open("index.html");
    window.close("Login_Page.html");
  } else {
    alert("Error Password or Username");
    window.location.reload();
  }
}

function Search() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

let Swimmers = [
  // {
  //   name: "Adele",
  //   age: 24,
  //   city: "Haifa",
  //   status: "Beginner",
  //   accomplishments: "none"
  // },
  // {
  //   name: "Agnes",
  //   age: 18,
  //   city: "Tel-Aviv",
  //   status: "Beginner",
  //   accomplishments: "none"
  // },
  // {
  //   name: "Billy",
  //   age: 26,
  //   city: "Petah Tikva",
  //   status: "professional",
  //   accomplishments: "Golden medal"
  // },
  // {
  //   name: "Bob",
  //   age: 23,
  //   city: "Ashdod",
  //   status: "advanced",
  //   accomplishments: "National medal"
  // },
  // {
  //   name: "Calvin",
  //   age: 20,
  //   city: "Haifa",
  //   status: "Beginner",
  //   accomplishments: "none"
  // },
  // {
  //   name: "Christina",
  //   age: 20,
  //   city: "Nesher",
  //   status: "Beginner",
  //   accomplishments: "none"
  // },
];





const add = (ev) => {
  ev.preventDefault();
  let dataFromLocalStorage = JSON.parse(localStorage.getItem("MySwimmerList"));
  let Swimmer = {
    id: 1,
    name: document.getElementById('name').value,
    age: document.getElementById('Age').value,
    city: document.getElementById('city').value,
    status: document.getElementById('status').value,
    accomplishments: document.getElementById('accomplishments').value,
  }
  if (dataFromLocalStorage) {
    dataFromLocalStorage.push(Swimmer);
    document.forms[0].reset();

    localStorage.setItem('MySwimmerList', JSON.stringify(dataFromLocalStorage).split("},{").join("},\n{"));
    window.location.reload(false);
  } else {
    let Arr = [];
    Arr.push(Swimmer);
    localStorage.setItem('MySwimmerList', JSON.stringify(Arr).split("},{").join("},\n{"));
    window.location.reload(false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('AddSwimmer').addEventListener('click', add);
})


let list = document.getElementById("myUL");
let data = JSON.parse(localStorage.getItem('MySwimmerList'));
if (data) {
  // Object.keys(data).map
  data.map((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let h6 = document.createElement("h6");
    h6 = "<h6 class='Description'>Status: " + item.status + " Age: " + item.age + "</h6>";
    li.innerHTML = item.name;
    a.innerHTML = item.name + h6;
    li.className = "liObject";
    li.innerHTML = "<span class='Delete' id='Delete'>Delete</span>" + "  " + a;
    a.href = "swimmer.html";
    li.appendChild(a);
    list.appendChild(li);
  })
}


let allLiObject = document.querySelectorAll(".liObject");
// let del = document.querySelector(".Delete");
// del.addEventListener("click", function (event) {
//   let newArr = [];
//   console.log(event.target);
//   for (let index = 0; index < allLiObject.length; index++) {
//         if(!(allLiObject[index] == event.target)){
//             newArr.push(allLiObject[index])
//         }
//       }
//       // this.closest(".liObject").remove();
//       // allLiObject = allLiObject.filter((obj)=> obj == allLiObject[index]);
//       // allLiObject.splice(allLiObject[index], 1);
//       // localStorage.setItem('MySwimmerList', JSON.stringify(allLiObject));
//     })

for (let index = 0; index < allLiObject.length; index++) {
  allLiObject[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
  for (let index = 0; index < allLiObject.length; index++) {
    allLiObject[index].querySelector(".Delete").addEventListener("click", function () {
      allLiObject[index].remove();
      localStorage.setItem('MySwimmerList', JSON.stringify(allLiObject));
    });

  }
}


function HideDeleteBtn() {
  for (let show of document.querySelectorAll('.Delete'))
    if (show.style.display === "block") {
      show.style.display = "none";
    }
  else {
    show.style.display = "block";
  }
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}


let Place = document.querySelector(".swimmerNameTitle");
if (data) {
  data.map((item) => {
    let h2 = document.createElement("h2");
    h2.innerHTML = item.name;
    Place.appendChild(h2);
  })
}

$(document).ready(function(){
  
  $(".input").focus(function(){
    
    $(this).parent().addClass("focus");
  }).blur(function(){
    
    if($(this).val() === ""){
      $(this).parent().removeClass("focus");
      
    }
    
  });
});