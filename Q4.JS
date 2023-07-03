var items = document.getElementsByClassName('list-items');
console.log(items);
items[2].textContent='hello';
items[2]. style.backgroundColor='green';


for(var i=0;i<items.length;i++)
{items[i].style.fontWeight='bold';
items[i].style.color='red';
}