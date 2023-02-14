(function(){

    const sliders = [...document.querySelectorAll('.top_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTop = document.querySelector('.top_body--show').dataset.id;
        value = Number(currentTop);
        value += add;


        sliders[Number(currentTop)-1].classList.remove('top_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('top_body--show');

    }


})();

