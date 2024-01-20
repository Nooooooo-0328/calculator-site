//  Nooooooo  //
//  改変や複製を一切禁止します。  //
//  https://github.com/Nooooooo-0328/calculator-site  //

function appendToDisplay(value) {
  document.getElementById("display").value += value;
  document.getElementById("error-message").innerText = "";
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("error-message").innerText = "";
}

function calculate() {
  try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
      document.getElementById("error-message").innerText = "";
  } catch (error) {
      document.getElementById("display").value = ""
      document.getElementById("error-message").innerText = `エラー: ${error.message}`;
  }
}
