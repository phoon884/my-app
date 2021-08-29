import axios from "axios";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function setCSRFCookie(res){
  if("csrf_token" in res.data){
    setCookie("csrf_access_token",res.data.csrf_token,1)
  }
}

async function CheckToken() {
  let result = null;
  await axios
    .get(`https://apartment-system1.herokuapp.com/api/protected`,
      { "withCredentials": true }
    )
    .then((res) => {
      //console.log("res.data.status:", res.data)
      if (res.data.status === "success") {
        setCSRFCookie(res)
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
    .get(`https://apartment-system1.herokuapp.com/api/user/signout`,
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
    .post(`https://apartment-system1.herokuapp.com/api/user/login`, user, {
      withCredentials: true,
    })
    .then((res) => {
      setCSRFCookie(res)
      result = true
    })
    .catch((err) => {
      result = false
    })
  return result;
}
async function MaintenancelogSubmit(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/maintenance_log/submit`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}

async function WaterBillSubmit(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/waterbill/input`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}

async function ElectricBillSubmit(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/electricbill/input`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}


async function GuestRetrieveData(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/guest/retrieve_data`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}

async function GuestRetrieveRoom(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/guest/retrieve_room`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}

async function GuestCheckOut(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/guest/remove_guest`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}

async function GuestCheckIn(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/guest/add_guest`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}


async function RetrievePaymentDue() {
  let result = null;
  await axios
    .get(`https://apartment-system1.herokuapp.com/api/guest/retrieve_payment_due`, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}


async function RemovePaymentDue(data) {
  let result = null;
  await axios
    .post(`https://apartment-system1.herokuapp.com/api/guest/remove_payment_due`, data, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": getCookie("csrf_access_token") }
    })
    .then((res) => {
      setCSRFCookie(res)
      console.log(res);
      result = res
    })
    .catch((err) => {
      console.log(err.response.data);
      result = err.response.data
    })
  return result;
}
export { Signout, CheckToken, ValidateLogin, MaintenancelogSubmit, WaterBillSubmit, ElectricBillSubmit, GuestRetrieveData, GuestRetrieveRoom, GuestCheckOut, GuestCheckIn, RetrievePaymentDue, RemovePaymentDue };