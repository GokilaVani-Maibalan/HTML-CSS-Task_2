
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

let page = document.createElement('div');
page.classList.add('table-responsive');
page.setAttribute('id', 'pagination');


let table = document.createElement('table');
table.setAttribute('id', 'table')
table.classList.add('table', 'table-bordered')

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

let data = undefined;
let current_page_number = 1;
async function loadPage() {
    a = fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
    out1 = await a;
    data = await out1.json();
    console.log(data);
    for (let i = 0; i < 10; i++) {

        let tb_row1 = document.createElement('tr');
        let td_1 = document.createElement('td');
        td_1.innerText = `${data[i].id}`
        tb_row1.append(td_1)

        let td_2 = document.createElement('td');
        td_2.innerText = `${data[i].name}`
        tb_row1.append(td_2)

        let td_3 = document.createElement('td');
        td_3.innerText = `${data[i].email}`
        tb_row1.append(td_3)

        table_body_1.append(tb_row1);
    }

}
table_head_1.append(th_row1);
table.append(table_head_1);
table.append(table_body_1);
page.append(table);

loadPage();

function navigatePageNumber(page_number) {
    if (page_number == 'Next' && current_page_number != 10) {
        current_page_number += 1;
    } else if (page_number == 'Previous' && current_page_number != 1) {
        current_page_number -= 1;
    } else {
        if (page_number == 'Next' || page_number == 'Previous') {
            current_page_number = current_page_number;
        } else {
            current_page_number = page_number;
        }
    }
   
    page_size = current_page_number * 10;
    let dynamic_table_body = document.createElement('tbody');
    let old_table_Content = document.getElementsByTagName('tbody')[0];

    for (let i = (page_size - 10); i < page_size; i++) {

        let tb_row1 = document.createElement('tr');
        let td_1 = document.createElement('td');
        td_1.innerText = `${data[i].id}`
        tb_row1.append(td_1)


        let td_2 = document.createElement('td');
        td_2.innerText = `${data[i].name}`
        tb_row1.append(td_2)

        let td_3 = document.createElement('td');
        td_3.innerText = `${data[i].email}`
        tb_row1.append(td_3)


        dynamic_table_body.append(tb_row1);
    }
    table_head_1.append(th_row1);
    table.append(table_head_1);
    table.replaceChild(dynamic_table_body, old_table_Content);
    page.append(table);

}


let pagination = document.createElement('div');
pagination.setAttribute('id', 'buttons');
pagination.classList.add('d-flex', 'justify-content-center');

let navigate = document.createElement('nav');

let first = document.createElement('a');
first.setAttribute('id', 'first');
first.innerText = 'First';
first.setAttribute('onclick', 'navigatePageNumber(1)');
pagination.appendChild(first)

let previous = document.createElement('a');
previous.setAttribute('id', 'previous');
previous.setAttribute('onclick', `navigatePageNumber('Previous')`);
previous.innerText = 'Previous';
pagination.appendChild(previous)

let two = document.createElement('a');
two.setAttribute('id', 'two');
two.innerText = '2';
two.setAttribute('onclick', 'navigatePageNumber(2)');
pagination.appendChild(two)

let three = document.createElement('a');
three.setAttribute('id', 'three');
three.setAttribute('onclick', 'navigatePageNumber(3)');
three.innerText = '3';
pagination.appendChild(three)

let four = document.createElement('a');
four.setAttribute('id', 'four');
four.setAttribute('onclick', 'navigatePageNumber(4)');
four.innerText = '4';
pagination.appendChild(four)

let five = document.createElement('a');
five.setAttribute('id', 'five');
five.setAttribute('onclick', 'navigatePageNumber(5)');
five.innerText = '5';
pagination.appendChild(five)

let six = document.createElement('a');
six.setAttribute('id', 'six');
six.setAttribute('onclick', 'navigatePageNumber(6)');
six.innerText = '6';
pagination.appendChild(six)

let seven = document.createElement('a');
seven.setAttribute('id', 'seven');
seven.setAttribute('onclick', 'navigatePageNumber(7)');
seven.innerText = '7';
pagination.appendChild(seven)

let eight = document.createElement('a');
eight.setAttribute('id', 'eight');
eight.setAttribute('onclick', 'navigatePageNumber(8)');
eight.innerText = '8';
pagination.appendChild(eight)

let nine = document.createElement('a');
nine.setAttribute('id', 'nine');
nine.setAttribute('onclick', 'navigatePageNumber(9)');
nine.innerText = '9';
pagination.appendChild(nine)


let next = document.createElement('a');
next.setAttribute('id', 'next');
next.setAttribute('onclick', `navigatePageNumber('Next')`);
next.innerText = 'Next';
pagination.appendChild(next)

let last = document.createElement('a');
last.setAttribute('id', 'last');
last.setAttribute('onclick', 'navigatePageNumber(10)');
last.innerText = 'Last';
pagination.appendChild(last)


parent.append(pagination);
pagination.append(navigate);

parent.append(page);
body.append(parent)








































