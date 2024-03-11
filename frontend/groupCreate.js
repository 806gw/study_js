const nameInput = document.querySelector("#name");
const createBtn = document.querySelector("#create-btn");

createBtn.addEventListener("click", () => {
  const name = nameInput.value;

  console.log(name);

  if (name !== "") {
    alert("그룹 생성이 되었습니다.");
  } else {
    alert("그룹 생성에 오류가 났습니다.");
    location.href = "http://127.0.0.1:5500/frontend/groups.html";
  }
});
