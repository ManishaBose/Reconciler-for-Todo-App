# Reconciler for Todo App

This project implements a frontend Todo application with a custom reconciler, designed to efficiently manage DOM updates based on changes in application state. The goal was to replicate the reconciliation logic used in libraries like React for state and DOM synchronization.

## Features

• State Management: Maintains and compares the current (newTodos) and previous (oldTodos) state of the Todo list.

• Reconciliation Logic: Identifies differences (added, updated, or removed Todos) and updates the DOM accordingly.

• Dynamic DOM Updates: Implements targeted DOM updates to avoid unnecessary re-renders.

## Implementation Details

1. State Diffing

The updateState function calculates the differences between newTodos (new state) and oldTodos (previous state). Based on these differences:
• New Todos are added to the DOM.
• Removed Todos are deleted from the DOM.
• Modified Todos are updated in the DOM.

2. Todo Structure

Each Todo item in the state is represented as:

```javascript
const todos = [
  {
    title: "Code for 2 hours",
    description: "Write reconciler logic from 9-11PM",
    id: 1,
  },
];
```

3. Core Functions

• addTodoToDom: Adds a new Todo to the DOM.

• removeTodoFromDom: Removes a Todo from the DOM.

• updateTodoInDom: Updates the DOM for an existing Todo.

• updateState: Orchestrates the reconciliation by detecting differences and calling the relevant DOM update functions.

### Why This Project?

This project serves as a foundational exercise in understanding:

• Reconciliation processes in modern libraries like React.

• Efficient DOM manipulation using JavaScript.

• State management and immutability principles.

### How to Use

1. Clone the repository.
2. Open index.html in your browser.
3. Use the app to add, update, and delete Todos. Observe how the DOM updates dynamically with changes in state.
