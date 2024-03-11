const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", () => {
  const id = idInput.value;
  const password = passwordInput.value;

  console.log(id);
  console.log(password);

  const data = {
    userid: idInput.value,
    password: passwordInput.value,
  }

  fetch("http://localhost:3000/auth/login", {
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
      return res.json();
    })
    .then((res) => {
      const { accessToken } = res;

      Cookies.set("access_token", accessToken, { path: "/", expires: 7 });
      alert("로그인 성공")
    })
    .catch((err) => {
      alert("아이디 또는 비밀번호가 틀렸습니다.")
      console.log(`에러 ${err}`);
    })
    .finally(() => {
      console.log("통신 끝");
    });
});