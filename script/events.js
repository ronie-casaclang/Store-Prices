
// search typing
const search = document.querySelector('#txtSearch');
search.addEventListener('input', ()=>{
    resetItem();
    searchItem(search.value);
});