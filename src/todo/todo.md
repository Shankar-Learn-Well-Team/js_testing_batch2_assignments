# DOM Manipulation Tutorial

In this tutorial, we will learn the basics of DOM (Document Object Model) manipulation using JavaScript. DOM manipulation allows you to interact with and modify the content and structure of a web page.

## Prerequisites

-   Basic knowledge of HTML and JavaScript.

## Example: Creating a To-Do List

Let's create a simple to-do list using HTML and JavaScript. We will add items to the list and remove them.

### HTML Structure

```html
<!doctype html>
<html>
    <head>
        <title>To-Do List</title>
    </head>
    <body>
        <h1>My To-Do List</h1>
        <ul id="todo-list">
            <!-- To-Do items will be added here dynamically -->
        </ul>
        <input type="text" id="new-todo" placeholder="Add a new task" />
        <button id="add-button">Add</button>
    </body>
</html>
```

### JavaScript for DOM Manipulation

We will use JavaScript to manipulate the DOM elements.

```javascript
// Get references to the DOM elements
const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

// Add event listener for the "Add" button
addButton.addEventListener('click', function () {
    const taskText = newTodoInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        // Append the list item and delete button to the to-do list
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Clear the input field
        newTodoInput.value = '';
    }
});
```

### Explanation

1. We start by getting references to the necessary DOM elements using `document.getElementById`.

2. We add an event listener to the "Add" button (`addButton`) to handle adding new tasks to the list.

3. When the "Add" button is clicked, we retrieve the text from the input field (`newTodoInput`), create a new list item (`li`), and add the text to it.

4. We also create a "Delete" button for each task and add an event listener to it. When the "Delete" button is clicked, we remove the corresponding list item.

5. Finally, we append the list item with the "Delete" button to the to-do list (`todoList`) and clear the input field.

## Conclusion

In this tutorial, we learned how to perform basic DOM manipulation using JavaScript. We created a simple to-do list application by dynamically adding and removing tasks from the DOM. DOM manipulation is a fundamental skill for building interactive web applications.
