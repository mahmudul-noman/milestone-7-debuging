const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;


    // truthy check
    if (id && value) {
        localStorage.setItem(id, value);
    }
    else{
        alert('Enter id & value');
    }
    idInput.value = '';
    valueInput.value = '';
}