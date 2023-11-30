const inputExpense = document.getElementById('exp-amt');
const inputDescription = document.getElementById('desc');
const inputCategory = document.getElementById('expense-cat');
const expenseList = document.getElementById('expenses');
const form = document.getElementById('form');
const msg = document.querySelector('.msg');

form.addEventListener('submit', addExpense);
expenseList.addEventListener('click', removeExpense);
expenseList.addEventListener('click', editExpense);

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:4000/get-expense')
        .then(expenses => {
            for(let i=0; i<expenses.data.length; i++) {
                displayExpenseDetails(expenses.data[i]);
            }
        })
        .catch(err => console.log(err))
})

function displayExpenseDetails(expenseObj) {
    //Creating different elements to be added in DOM
    const li = document.createElement('li');
    const delBtn = document.createElement('input');
    const editBtn = document.createElement('input');

    //Creating Delete button
    delBtn.className = 'del float-right';
    delBtn.setAttribute('type', "button");
    delBtn.setAttribute('value', "DELETE");

    //Creating Edit button
    editBtn.className = 'edit float-right';
    editBtn.setAttribute('type', "button");
    editBtn.setAttribute('value', "EDIT");

    //Appending all above 3 elements
    li.appendChild(document.createTextNode(`${expenseObj.amt} - ${expenseObj.description} - ${expenseObj.category}`));
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    li.setAttribute("id", expenseObj.id);

    //appendimg the li to ul inside DOM
    expenseList.appendChild(li);
}

async function addExpense(e) {
    e.preventDefault();

    if (inputExpense.value === '' || inputDescription.value === '' || inputCategory.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        console.log(1);

        setTimeout(() => msg.remove(), 2000);
    } else {
        //Creating different elements to be added in DOM
        const li = document.createElement('li');
        const delBtn = document.createElement('input');
        const editBtn = document.createElement('input');

        //Creating Delete button
        delBtn.className = 'del float-right';
        delBtn.setAttribute('type', "button");
        delBtn.setAttribute('value', "DELETE");

        //Creating Edit button
        editBtn.className = 'edit float-right';
        editBtn.setAttribute('type', "button");
        editBtn.setAttribute('value', "EDIT");

        //Appending all above 3 elements
        li.appendChild(document.createTextNode(`${inputExpense.value} - ${inputDescription.value} - ${inputCategory.value}`));
        li.appendChild(delBtn);
        li.appendChild(editBtn);


        //appendimg the li to ul inside DOM
        expenseList.appendChild(li);

        //Storing user Data as an object
        const expenseObj = {
            amt: `${inputExpense.value}`,
            description: `${inputDescription.value}`,
            category: `${inputCategory.value}`
        }

        try {
            const response = await axios.post('http://localhost:4000/add-expense', expenseObj);
            li.setAttribute("id", response.data.id);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        inputExpense.value = '';
        inputDescription.value = '';
        inputCategory.value = '';

    }
}

function removeExpense(e) {
    if (e.target.classList.contains('del')) {
        partsString = e.target.parentElement.innerText.split('-');
        food_category = partsString[2].trim();
        console.log(food_category);
        expenseList.removeChild(e.target.parentElement);
        localStorage.removeItem(food_category);
    }
}

function editExpense(e) {
    if (e.target.classList.contains('edit')) {
        partsString = e.target.parentElement.innerText.split('-');
        inputExpense.value = partsString[0].trim();
        inputDescription.value = partsString[1].trim();
        inputCategory.value = partsString[2].trim();
        localStorage.removeItem(partsString[2].trim());
        expenseList.removeChild(e.target.parentElement);
    }
}