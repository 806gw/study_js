const groupList = document.querySelector(".group-list");

const data = [
  {
    id: 1,
    name: "그룹1",
  },
  {
    id: 2,
    name: "그룹2",
  },
  {
    id: 3,
    name: "그룹3",
  },
  {
    id: 4,
    name: "그룹4",
  },
  {
    id: 5,
    name: "그룹5",
  },
  {
    id: 6,
    name: "그룹6",
  },
];

data.forEach((e) => {
  const newLi = document.createElement("li");
  newLi.innerText = e.name;

  newLi.addEventListener("click", () => {
    console.log(e.id);
  });

  groupList.appendChild(newLi);
});

if(!Cookies.get("access_token")) {
  location.href = "http://127.0.0.1:5500/frontend/login.html"
} 
