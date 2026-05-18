const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

function loginAdmin(username, password){
  if(username === ADMIN_USER && password === ADMIN_PASS){
    localStorage.setItem("adminLogin", "true");
    return true;
  }
  return false;
}

function checkAdmin(){
  return localStorage.getItem("adminLogin") === "true";
}

function logoutAdmin(){
  localStorage.removeItem("adminLogin");
  window.location.href = "admin-login.html";
}
