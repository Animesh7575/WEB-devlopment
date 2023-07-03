var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

itemList.addEventListener('click , remove');
var li = document.createElement('li');

var deletebtn=document.createElement('button');


function removeItem(e){
    if(e.target.classlist.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.paraElement;
            itemList.removeChild(li);
        }
    }
}
)
