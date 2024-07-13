# Task Management App

## Overview

The Task Management App is a simple application built with Angular to help users manage tasks. Users can create, edit, delete, and filter tasks based on priority and status. The app uses local storage to persist tasks.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

Task-Management-App/
├── src/
│ ├── app/
│ │ ├── app.component.html
│ │ ├── app.component.ts
│ │ └── app.module.ts
│ ├── assets/
│ ├── environments/
│ ├── index.html
│ └── main.ts
├── .gitignore
├── angular.json
├── package.json
├── README.md
└── tsconfig.json

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Angular CLI](https://angular.io/cli) (version 12.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Task-Management-App.git
   cd Task-Management-App

   
Install dependencies:
npm install


Running the Application
To start the application, run:
ng serve
Then, open your browser and navigate to http://localhost:4200.

Usage
Task Creation
Click on the "Add New +" button.
Fill in the task details (title, description, priority, status, due date).
Click on "Submit" to save the task.

Task Editing
Click on the "Edit" button next to the task you want to edit.
Update the task details.
Click on "Update" to save the changes.

Task Deletion
Click on the "Delete" button next to the task you want to delete.
Confirm the deletion in the popup dialog.

Filtering Tasks
Use the "Filter by Priority" and "Filter by Status" dropdowns to filter tasks.
The task list will update based on the selected filters.

Features
Add new tasks with details (title, description, priority, status, due date).
Edit existing tasks.
Delete tasks.
Filter tasks by priority and status.
Persist tasks in local storage.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
