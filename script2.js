
let body = document.querySelector('body');

parent = document.createElement('div');
parent.classList.add('container');

let head = document.createElement('h1');
head.setAttribute('id', 'title');
head.innerText = "PAGINATION";
parent.append(head)

let detail = document.createElement('p');
detail.setAttribute('id', 'description');
detail.innerText = "Pagination in DOM Manipulation";
parent.append(detail);

let pagi = document.createElement('div');
pagi.classList.add('table-responsive');
pagi.setAttribute('id','pagination');


let table = document.createElement('table');
table.setAttribute('id','table')
table.classList.add('table','table-bordered')

let table_head_1 = document.createElement('thead');
let th_row1 = document.createElement('tr');

let th_1 = document.createElement('th');
th_1.innerText = "ID";
th_row1.append(th_1);

let th_2 = document.createElement('th');
th_2.innerText = "NAME";
th_row1.append(th_2);

let th_3 = document.createElement('th');
th_3.innerText = "EMAIL";
th_row1.append(th_3);

let table_body_1 = document.createElement('tbody');
let tb_row1 = document.createElement('tr');

let td_1 = document.createElement('td');
tb_row1.append(td_1)

let td_2 = document.createElement('td');
tb_row1.append(td_2)

let td_3 = document.createElement('td');
tb_row1.append(td_3)

table_body_1.append(tb_row1);


table_head_1.append(th_row1);
table.append(table_head_1);
table.append(table_body_1);
pagi.append(table);

let navigate = document.createElement('nav');

let pagination = document.createElement('div');
pagination.setAttribute('id','fix');

let list = document.createElement('ul');

let list_item_first = document.createElement('li');
let first = document.createElement('div');
first.setAttribute('id','buttons');
first.classList.add('d-flex' , 'justify-content-center');
first.innerText = 'First';
list_item_first.append(first);
list.append(list_item_first);

let list_item_prev = document.createElement('li');
let prev = document.createElement('div');
prev.setAttribute('id','buttons');
prev.classList.add('d-flex' , 'justify-content-center');
prev.innerText = 'Previous';
list_item_prev.append(prev);
list.append(list_item_prev);


let list_item_next = document.createElement('li');
let next = document.createElement('div');
next.setAttribute('id','buttons');
next.classList.add('d-flex' , 'justify-content-center');
next.innerText = 'Next';
list_item_next.append(next);
list.append(list_item_next);


let list_item_last = document.createElement('li');
let last = document.createElement('div');
last.setAttribute('id','buttons');
last.classList.add('d-flex' , 'justify-content-center');
last.innerText = 'Last';
list_item_last.append(last);
list.append(list_item_last);

pagination.append(list);
parent.append(pagination);
parent.append(navigate);

parent.append(pagi);
body.append(parent)








































// next = document.querySelector('[for="next"]');

// next.addEventListener('click',()=>{
//  let arr = [1,2,3]
//  for(let i of arr){
//  element = document.querySelector(`[for="${i}"]` );
//  a = element.getAttribute('href');
//  b = a.split('/');

//  element.innerText = Number(element.innerText) + 3;
//  b[1]='day-'+element.innerText;
//  a = element.setAttribute('href',b.join('/'))
//  console.log(b.join('/'))
//  console.log(element)
//  }
// })

// previous = document.querySelector('[for="Previous"]');

// previous.addEventListener('click',()=>{
//     let arr1=[1,2,3];
//     for(let i of arr1){
//         delement = document.querySelector(`[for="${i}"]`)
//             delement.innerText=Number(delement.innerText)-3;
//         console.log(delement);
//     }
//     })