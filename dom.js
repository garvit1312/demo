//Examine the document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="hello";
//console.log(document.forms);
//console.log(document.links);

//GetElementById //
//console.log(document.getElementById('header-title'));
//var headerTitle =document.getElementById('header-title');
//var header =document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerText="good";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML ='<h3>hello</h3>';
//header.style.borderBottom ='solid 3px #000';

//GETELEMENTSBYCLASSNAMES//
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent ='hello 2';
items[1].style.fontWeight ='bold';
items[1].style.backgroundColor ='red';
//items.style.backgroundColor ='#f4f4f4';
for(var i=0;i<items.length;i++){
items[i].style.backgroundColor ='#f4f4f4';

}