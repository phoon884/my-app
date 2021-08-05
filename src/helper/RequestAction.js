import axios from "axios";
 async function CheckToken() {
    let result = null;
    await axios
      .get(`http://localhost:5000/protected`, 
        {"withCredentials": true}
      )
      .then((res) => {
        console.log("res.data.status:",res.data)
        if (res.data.status === "success") {
            result = true
        }
      })
      .catch((err) => {
        console.log(err);
        result = false
      });
      console.log("result:",result);
      return result
}

async function Signout() {

  await axios
    .get(`http://localhost:5000/user/signout`, 
      {"withCredentials": true}
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
export {Signout, CheckToken,ValidateLogin};