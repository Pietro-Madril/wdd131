const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

button.addEventListener('click', function() {
    const chapter = input.value.trim();

    if (chapter !== '') { 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button'); 

        li.textContent = chapter; 
        deleteButton.textContent = '❌'; 
        deleteButton.setAttribute('aria-label', `Remover ${chapter}`);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); 
        });

        li.append(deleteButton); 
        list.append(li); 

        input.value = '';
        input.focus();
    } else {
        alert('Please, enter a chapter and book to continue.');
    }
});
