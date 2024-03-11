const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const nameInput = document.querySelector("#name");
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", () => {

  const data = {
    userid : idInput.value,
    password : passwordInput.value,
    username : nameInput.value,
  }

  fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    alert("회원가입 성공!")
    location.href = "http://127.0.0.1:5500/frontend/login.html"
  })

  .catch((err) => {
    alert("회원가입 실패")
    console.log(`에러 ${err}`);
  })
  .finally(() => {
    console.log("통신 끝");
  });
  
})