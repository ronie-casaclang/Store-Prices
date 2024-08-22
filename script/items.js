

// search item
function searchItem(keyword){
    for (var i=0; i<store.length; i++){
        var desc = store[i].description.toLowerCase();
        var kw = keyword.toLowerCase();
        if (desc.includes(kw)) createItem(i);
    }
}

// reset item
function resetItem(){
    var con = document.querySelector('.container');
    while(con.hasChildNodes()){
        con.removeChild(con.firstChild);
    }
}

// display items
function displayItem(){
    store.sort((a, b) => a.description.localeCompare(b.description));
    for (var i=0; i<store.length; i++){
        createItem(i);
    }
}
        
// create item
function createItem(i){
    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerText = store[i].description;
    
    const price = document.createElement('p');
    price.classList.add('price');
    price.innerText = store[i].prices;
    
    const box = document.createElement('div');
    box.classList.add('box-item');
    box.appendChild(desc);
    box.appendChild(price);
    
    const con = document.querySelector('.container');
    con.appendChild(box);
}