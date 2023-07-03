var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

Filter.addEventListner('keyup','filteritems');

function filteritems(e){
    var text=e.target.value.tolowerCase();
    var items=itemlist.getelementbyTagName('li');
    Array.from(items).forEach(function(item)){
        var itemName=item.firstchild.textcontent;
        if(itemName.toLowerCase().indexof(text)!= -1){
            item.style.display='block';
       }
       else {
        item.style.display='none';
        
       }
    }
}