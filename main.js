let box = document.querySelectorAll('.random');
let button = document.querySelector('button');
let tableau = document.querySelector('ul');
let title = document.querySelector('h1');
let subtitle = document.querySelector('h2');

console.log(box)
console.log(button)

//box.forEach(function(item){
  //  item.addEventListener("mouseenter", function(){
    //    item.classList.add("over");
      //  item.addEventListener("mouseout", function(){
        //    item.classList.remove('over')
        //})
    //})
// })

// button.addEventListener("click", function(){
//     tableau.classList.toggle("click");
// })

title.addEventListener('click', function(){
    subtitle.insertAdjacentElement('afterend', title);
    subtitle.addEventListener("click", function(){
        title.insertAdjacentElement('afterend', subtitle)
    })
})