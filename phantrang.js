const itemsPerPage = 8; 
const itemsPerPage2 = 6; 
let currentPage = 1;
let currentPage2 = 1;
function changePage(i) {
    currentPage =i;
    showPage();
}


function showPage() {
    const items = document.getElementsByClassName('item-show');
    
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }

    renderPagination(items);
}

function renderPagination(items) {
    const totalItems = document.getElementsByClassName('item-show').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginationContainer = document.getElementById('pagenumber');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.innerText = i;
        btn.className = 'pagination-btn';
        btn.onclick = function () {
            changePage(i);
        };

        if (i === currentPage) {
            btn.classList.add('active');
        }

        paginationContainer.appendChild(btn);
    }

}
showPage();


function changePage2(u) {
    currentPage2 = u;
    showPage2();
}

function showPage2() {
    const items2 = document.getElementsByClassName('item-show');
    
    for (let u = 0; u < items2.length; u++) {
        items2[u].style.display = 'none';
    }

    const startIndex = (currentPage2 - 1) * itemsPerPage2;
    const endIndex = startIndex + itemsPerPage2;

    for (let u = startIndex; u < endIndex; u++) {
        if (items2[u]) {
            items2[u].style.display = 'block';
        }
    }

    renderPagination2(items2);
}

function renderPagination2(items2) {
    const totalItems = document.getElementsByClassName('item-show').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginationContainer2 = document.getElementById('pagenumber2');
    paginationContainer2.innerHTML = '';

    for (let u = 1; u <= totalPages; u++) {
        const btn = document.createElement('div');
        btn.innerText = u;
        btn.className = 'pagination-btn';
        btn.onclick = function () {
            changePage(u);
        };

        if (u === currentPage2) {
            btn.classList.add('active');
        }

        paginationContainer2.appendChild(btn);
    }

}
showPage2();