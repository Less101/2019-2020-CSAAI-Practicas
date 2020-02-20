console.log("Ejecutando JS...");
const test = document.getElementById('test')
test.onclick = () => {
  console.log("Haz click en este párrafo");
  if (test.style.background ==""){
    test.style.background = "yellow";
}
else {
  test.style.background = "";
}
}
