const url = new URL(window.location.href);
const groupId = url.searchParams.get("groupId");
const searchDateInput = document.querySelector("#search-date");
const searchDateBtn = document.querySelector("#search-btn");
const attendanceTableTbody = document.querySelector(
  ".attendance-table > tbody"
);
const inviteUserIdInput = document.querySelector("#invite-user-id");
const inviteBtn = document.querySelector("#invite-btn");

const data = [
  {
    user: {
      id: 1,
      userid: "user1",
      username: "유저1",
    },
    isAttendance: true,
    message: "",
  },
  {
    user: {
      id: 2,
      userid: "user2",
      username: "유저2",
    },
    isAttendance: false,
    message: "",
  },
  {
    user: {
      id: 3,
      userid: "user3",
      username: "유저3",
    },
    isAttendance: true,
    message: "병원 진료 후 12시 출석",
  },
];

console.log(groupId);

searchDateBtn.addEventListener("click", () => {
  const searchDate = searchDateInput.value;

  console.log(searchDate);
});

inviteBtn.addEventListener("click", () => {
  const inviteUserId = inviteUserIdInput.value;

  console.log(inviteUserId);
});

data.forEach((e) => {
  const newTr = document.createElement("tr");
  newTr.className = `${
    e.isAttendance ? "attendance-true-tr" : "attendance-false-tr"
  }`;

  const userNameAndIdTd = document.createElement("td");
  userNameAndIdTd.innerText = `${e.user.username}(${e.user.userid})`;

  const isAttendanceTd = document.createElement("td");
  isAttendanceTd.className = "is-attendance-td";
  isAttendanceTd.innerText = e.isAttendance ? "출석" : "미출석";

  const messageTd = document.createElement("td");

  const messageInput = document.createElement("input");
  messageInput.className = "message-input";
  messageInput.value = e.message;
  messageTd.appendChild(messageInput);

  const attendanceTrueBtnTd = document.createElement("td");
  attendanceTrueBtnTd.className = "attendance-true-btn";
  attendanceTrueBtnTd.innerText = "출석";
  attendanceTrueBtnTd.addEventListener("click", () => {
    console.log(groupId);
    console.log(e.user.id);
    console.log(messageInput.value);
  });

  const attendanceFalseBtnTd = document.createElement("td");
  attendanceFalseBtnTd.className = "attendance-false-btn";
  attendanceFalseBtnTd.innerText = "미출석";
  attendanceFalseBtnTd.addEventListener("click", () => {
    console.log(groupId);
    console.log(e.user.id);
    console.log(messageInput.value);
  });

  newTr.appendChild(userNameAndIdTd);
  newTr.appendChild(isAttendanceTd);
  newTr.appendChild(messageTd);
  newTr.appendChild(attendanceTrueBtnTd);
  newTr.appendChild(attendanceFalseBtnTd);

  attendanceTableTbody.appendChild(newTr);
});