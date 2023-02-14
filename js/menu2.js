const hamburguer = document.querySelector('.nav_menu');
const menu = document.querySelector('.nav_link--menu');


//console.log(menu)
//console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

//basicamente con lo siguiente, al dar click en cualquier lugar, se puede notar en la consola, el lugar en donde diste click, por ejemplo en div con la clase menu o subitulo etc.
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer  ){
        
        menu.classList.toggle("spread")

    }
})