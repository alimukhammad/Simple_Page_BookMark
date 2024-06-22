let urlInput = document.getElementById('urlInput');
let addBtn = document.getElementById('addBookmark'); // create addBtn listener method
let deleteBtn = document.getElementById('deleteAll');// create deleteBtn listener method
let bookmarkList = document.getElementById('bookmarkList');

function urlValidation(url){
    let urlPatern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return urlPatern.test(url); //
}

addBtn.addEventListener('click', function(){        //addBtn listner bookmark method
    let url = urlInput.value;

    console.log(url);
    if(urlValidation(url)){
        let bookmarkItem = document.createElement('li');
        bookmarkItem.classList.add('bookmark-item');
        bookmarkItem.innerHTML = `
        <a href="${url}" target="_blank">"${url}"</a>
        <div class='buttons'>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>`;
        bookmarkList.appendChild(bookmarkItem);
        urlInput.value = '';
        addBookmarkListner(bookmarkItem);   //add bookmark method
        deleteBookmarkListner(bookmarkItem); //delete bookmark method   
    }
    else{
        alert('Please enter a valid URL ex: http:// or https://');
    }
//    console.log(url);

    let bookmarkTagA = document.createElement('a'); //create a tag
    let h1 = document.createElement('h1'); // create a tag
    h1.textContent = url; //set the value of url to h1
    bookmarkTagA.appendChild(h1); //append h1 and its value to <a> tag
});

deleteBtn.addEventListener('click', ()=>{
    bookmarkList.innerHTML = '';

});

function addBookmarkListner(bookmarkItem){
    let editBtn = bookmarkItem.querySelector('.edit');
    let bookmarkLink = bookmarkItem.querySelector('a');

    editBtn.addEventListener('click', ()=>{
        let newUrl = prompt("Edit the URL:", bookmarkItem.getAttribute('href'));
        if(newUrl && urlValidation(newUrl)){
            bookmarkLink.setAttribute('href', newUrl);
            bookmarkLink.innerHTML = newUrl;
        }
        else{
            alert('Please enter a valid URL ex: http:// or https://');
        }
    });
}

function deleteBookmarkListner(bookmarkItem){
    const deleteButton = bookmarkItem.querySelector(".delete"); 
    deleteButton.addEventListener("click", () => { bookmarkItem.remove(); }); 
}
