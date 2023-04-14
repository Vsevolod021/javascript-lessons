const elem1 = document.querySelector('.elem1');
const elem2 = document.querySelector('.elem2');
const elem2Child = document.querySelector('.elem2__child');

// elem1.addEventListener('mouseover', (event) => {
//     console.log(event.target);
//     console.log(event.relatedTarget?.tagName);
// });

/*
                 --------------
     mouseover  |              |  mouseout
    ----------> |      div     | ---------->
                |              |
                ---------------
*/
const showLeft = () => {
    console.log('left');
};

elem2.addEventListener('mouseenter', showLeft);
elem2Child.addEventListener('mouseenter', showLeft);
