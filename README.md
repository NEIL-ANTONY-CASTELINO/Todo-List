# Todo List

A simple, colorful to-do list web app built with HTML, Tailwind CSS, DaisyUI and JavaScript. Add tasks with due dates, mark them complete, filter them, and switch between 11 color themes. Your tasks are saved in the browser, so they're still there when you come back.

**Live demo:** https://neil-antony-castelino.github.io/Todo-List/todo-list-main/

## Features

- **Add tasks** with an optional due date (click **+** or press **Enter**)
- **Edit** a task
- **Mark tasks complete** or set them back to pending
- **Delete** a single task, or clear everything with **Delete All**
- **Filter** by All, Pending or Completed
- **11 themes**: cupcake, dark, light, bumblebee, synthwave, halloween, fantasy, dracula, aqua, luxury and night
- **Saves automatically** to your browser's local storage
- Success and error messages for each action

## Built With

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling and themes
- [Boxicons](https://boxicons.com/) for icons
- Vanilla JavaScript
- Browser Local Storage for saving tasks

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/NEIL-ANTONY-CASTELINO/Todo-List.git
   cd Todo-List/todo-list-main
   ```

2. Open `index.html` in your browser.

That's it: no install or build step needed.

## Project Structure

```
todo-list-main/
├── index.html            # Main page
├── css/
│   └── style.css         # Custom styles
├── js/
│   ├── main.js           # To-do list logic (add, edit, delete, filter, save)
│   ├── theme_switcher.js # Theme picker
│   ├── app.js            # Backend: Express server
│   ├── routes.js         # Backend: API routes
│   └── models.js         # Backend: MongoDB task model
├── res/
│   └── favicon.svg
└── todo-list-backend/
    └── package.json      # Backend dependencies
```

## Backend (in progress)

The project also includes a basic REST API built with **Node.js**, **Express** and **MongoDB (Mongoose)**. It isn't connected to the web page yet, since the page currently saves tasks in local storage.

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | `/api/tasks`      | Get all tasks                 |
| POST   | `/api/tasks`      | Create a task (`{ "text": "..." }`) |
| PATCH  | `/api/tasks/:id`  | Toggle a task's completed status |
| DELETE | `/api/tasks/:id`  | Delete a task                 |

To run it, make sure MongoDB is running on `localhost:27017`, then from the `todo-list-main` folder:

```bash
npm install express mongoose
node js/app.js
```

The server starts on `http://localhost:3000`.

## Author

**Neil Castelino** – [GitHub](https://github.com/NEIL-ANTONY-CASTELINO)
