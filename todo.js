var ul=document.getElementById('list')
var li;





var addbutton = document.getElementById('add')
addbutton.addEventListener('click',additem);

var removebutton = document.getElementById('remove')
removebutton.addEventListener('click', removeitem);




function additem(){
var input = document.getElementById('input');
var item =input.value;
ul=document.getElementById('list')
var textnode = document.createTextNode(item)
 if(item === '')
 { var p = document.createElement('p')
 var myvalue = document.createTextNode('there was no todo to add')
 p.appendChild(myvalue)
 document.getElementById('input').appendChild(p);
}
 else{
    li= document.createElement('li')
    var checkbox= document.createElement('input')
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check');
    var label= document.createElement('label')
   ul.appendChild(label)
   li.appendChild(checkbox)
   label.appendChild(textnode)
   li.appendChild(label)
   ul.insertBefore(li,ul.childNodes[0]);
   li.className = 'visual';
   setTimeout(()=>{
    li.className = 'visual';

   },1)
   input.value=''








 }













}
function removeitem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
       while (li[index]&&li[index].children[0].checked) {

        ul.removeChild(li[index]);
           
       }
        
    }

}