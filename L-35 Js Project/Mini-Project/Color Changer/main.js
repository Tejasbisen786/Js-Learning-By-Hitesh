const button = document.querySelectorAll('button')
const body= document.querySelector('body')

button.forEach((button)=>{
   button.addEventListener('click',function(e){
    
    if (e.target.id === 'Black') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'Green') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'Pink') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'Purple') {
        body.style.backgroundColor = e.target.id;
      }
   })
})


