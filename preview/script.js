const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('Hello');
// }

let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if (i > 1){
    btn.removeEventListener('click', deleteElement);
    };
};

btn.addEventListener('click', deleteElement);




btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'green';
});


const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    
});