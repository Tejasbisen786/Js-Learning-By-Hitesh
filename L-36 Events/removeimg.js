document.querySelector('#images').addEventListener('click',function(e){
    // console.log(e.target.tagName);
    // .removeIt.remove();
    // let removeImg=e.target.parentNode 
    // removeImg.parentNode.removeChild(removeit)
    
     if(e.target.tagName ==='IMG')
     {
        console.log(e.target.id);
         let removeIt= e.target.parentNode
         removeIt.remove()

     }

},false)