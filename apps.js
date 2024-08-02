var pluse=document.getElementById('plus');
var bad=document.getElementById('bad');
var text=document.getElementById('text');
var count=0;
function Update(value){
    count=count+value;
    text.innerHTML=count;
    if(count >= 10){
        pluse.setAttribute('disabled' , true)
    }else{
        pluse.removeAttribute('disabled',false)
    }
    
    if(count <= 0){
        bad.setAttribute('disabled',true)
    }else{
        bad.removeAttribute('disabled',false)
    }
}
pluse.addEventListener('click',() =>{
    Update(+1)
})

bad.addEventListener('click',() => {
    Update(-1)

} )