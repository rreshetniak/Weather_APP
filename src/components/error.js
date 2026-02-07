const errorMessage = document.getElementById('error-message');

export function showError (message = "") {

  if(!errorMessage){
    return;
  }
  errorMessage.textContent = message;
  errorMessage.style.display = message ? "block" : "none";
}
// export function showError (message) {
//   errorMessage.textContent = message;
// }

export function clearError() {
  showError("");
}