let box = document.querySelectorAll('.random');
let button = document.querySelector('button');

console.log(box)
console.log(button)

box.forEach(function(item){
    item.addEventListener("mouseover", function(){
        item.classList.toggle("over");
    })
})
