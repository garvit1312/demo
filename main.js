var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
//Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();
    //Get input value
    var newItem= document.getElementById('item').value;
    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create del button Element
    var deletebtn= document.createElement('button');
    //Add classes to del Button
    deletebtn.className="btn btn-danger btn-sm float-right delete";
    //Append text node
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);
}
//Remove Element
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}