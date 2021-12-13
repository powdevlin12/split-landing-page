let left=document.getElementsByClassName('left')[0];
let right=document.getElementsByClassName('right')[0];
let container=document.getElementsByClassName('container')[0];
left.addEventListener('mouseenter',()=>
{
    container.classList.add('hover-left');      
})
right.addEventListener('mouseenter',()=>
{
    container.classList.add('hover-right');      
})
left.addEventListener('mouseleave',()=>
{
    container.classList.remove('hover-left');      
})
right.addEventListener('mouseleave',()=>
{
    container.classList.remove('hover-right');      
})