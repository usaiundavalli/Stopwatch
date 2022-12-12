
const ele = document.getElementsByClassName('clg')

const table = document.getElementById('tt');
table.addEventListener("click", (e) =>{
    for(let i=0;i<ele.length;i++){
        let id = document.getElementById(i+1);
        id.classList.remove('active');
    }
    
    if(e.target.classList.contains('clg')){
        e.target.classList.add("active");
    }
})






