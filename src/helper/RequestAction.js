import axios from "axios";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function CheckToken() {
  let result = null;
  await axios
    .get(`http://localhost:5000/protected`,
      { "withCredentials": true }
    )
    .then((res) => {
      //console.log("res.data.status:", res.data)
      if (res.data.status === "success") {
        result = true
      }
    })
    .catch((err) => {
      console.log("in catch");
      result = false
    });
  //console.log("result:", result);
  return result
}

async function Signout() {

  await axios
    .get(`http://localhost:5000/user/signout`,
      { "withCredentials": true }
    )
    .then((res) => {
      if (res.data.status === "success") {
        console.log(res.data.status);
        return true
      }
    })
    .catch((err) => {
      console.log(err);
      return false
    });
  return false
}

async function ValidateLogin(user) {
  let result = null;
  await axios
    .post(`http://localhost:5000/user/login`, user, {
      withCredentials: true,
    })
    .then((res) => {
      result = true
    })
    .catch((err) => {
      result = false
    })
  return result;
}
async function MaintenancelogSubmit() {
  let data = {
    "roomid": "A215",
    "code": "FAC",
    "date": "8-6-2021",
    "cost": "2000",
    "note": ""
  }
  let result = null;
  await axios
    .post(`http://localhost:5000/maintenance_log/submit`, data, {
      withCredentials: true,
      headers:{"X-CSRF-TOKEN": getCookie("csrf_access_token")}
    })
    .then((res) => {
      console.log(res);
      result = true
    })
    .catch((err) => {
      console.log(err.response.data);
      result = false
    })
  return result;
}
export { Signout, CheckToken, ValidateLogin, MaintenancelogSubmit };