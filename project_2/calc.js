const input = document.getElementById("input")

let value = "";
const buttons = document.getElementById('buttons')
buttons.addEventListener("click", (e) => {
 value += e.target.innerText;
 input.value = value
 console.log(value);
})

function equal() {
    value = value.replace(/\s/g, '');
    value = eval(value) ;

    input.value = value
  }

  function remove(){
    console.log("hello");
    value = ""
    input.value=""
  }