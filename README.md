# ReachInbox.ai Assignment

This assignment involves building a web application with key functionalities including a login page, onebox screen, keyboard shortcuts, a custom text editor, and support for light and dark modes. You will use React.js, Tailwind CSS, and Next.js to develop the application, with API integrations for data fetching and interaction.

## Task Overview

- **Login Page**: Implement a login page that authenticates users and redirects them to the onebox screen.
- **Onebox Screen**: Fetch and display threads from the provided API, with support for keyboard shortcuts and reply functionality.
- **Custom Text Editor**: Integrate a text editor with custom buttons for saving drafts and inserting variables.
- **Theme Support**: Implement light and dark mode toggles.
- **API Integration**: Use the provided API endpoints to manage threads and send replies.

## Implementation Steps

### 1. Setup Your Development Environment

- **Install Node.js**: Ensure Node.js is installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).
- **Clone the Repository**: Clone the Git repository where you'll be storing your code.

  ```bash
  git clone <repository-url>
  cd <repository-directory>
  ```

- **Install Dependencies**: Initialize your project and install the necessary packages.

  ```bash
  npm init -y
  npm install react react-dom next tailwindcss axios
  ```

- **Setup Tailwind CSS**: Configure Tailwind CSS for styling.

  - Create a `tailwind.config.js` file by running:

    ```bash
    npx tailwindcss init
    ```

  - Add the following content to your `tailwind.config.js` file:

    ```javascript
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

  - Include Tailwind in your CSS by adding these lines to your `styles/globals.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### 2. Implement the Login Page

- **Create a Login Component**: In the `pages` directory, create a `login.js` file. Implement the login page using the design provided in the Figma file.

  - **Form Handling**: Use React's state and controlled components for managing form inputs.
  - **Styling**: Apply styles using Tailwind CSS classes.

### 3. Implement Routing

- **Setup Routing**: Use Next.js routing to navigate between the login page and the onebox screen. After a successful login, redirect the user to `/onebox`.

  - Update `pages/index.js` to redirect to the login page or onebox screen based on authentication state.

### 4. Implement the Onebox Screen

- **Create Onebox Component**: In the `pages` directory, create a `onebox.js` file. Fetch and display data from the provided API.

  - **API Integration**: Use Axios to fetch data from the API endpoints:
    - `GET /onebox/list`
    - `GET /onebox/:thread_id`
    - `DELETE /onebox/:thread_id`

- **Keyboard Shortcuts**: Implement keyboard shortcuts using event listeners in React. Bind "D" to delete and "R" to open the reply box.

### 5. Customize the Text Editor

- **Create a Custom Text Editor Component**: Integrate a text editor and add custom buttons like "SAVE" and "Variables". Use a rich text editor library like `react-quill` or build a simple custom editor.

  - **Text Editor Integration**: Install and configure the editor:

    ```bash
    npm install react-quill
    ```

  - **Implement Custom Buttons**: Extend the text editor's toolbar with custom buttons.

### 6. Implement Reply Functionality

- **Handle Replies**: Implement the reply functionality by sending a `POST` request to the `POST /reply/:thread_id` API endpoint.

  - **Form Submission**: Capture the email content and send it using Axios.

### 7. Implement Light and Dark Mode

- **Theme Toggle**: Use Tailwind's dark mode feature to implement light and dark themes. Provide a toggle switch in your UI to switch between modes.

  - **Configuration**: Update your `tailwind.config.js`:

    ```javascript
    module.exports = {
      darkMode: 'class',
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

- **Apply Theme Classes**: Use conditional classes in your components to apply light or dark mode styles.

### 8. Final Testing and Debugging

- **Test Functionality**: Thoroughly test your application to ensure all features work as expected.
- **Cross-Browser Testing**: Ensure your app works across different browsers and devices.

### 9. Record a Video Walkthrough

- **Screen Recording**: Use a tool like Loom to record a walkthrough of your application. Showcase all the implemented features, including the login page, onebox screen, text editor, reply functionality, and theme toggle.

### 10. Push Code to GitHub

- **Commit Your Code**: Regularly commit your changes with clear and descriptive commit messages.

  ```bash
  git add .
  git commit -m "Implemented login page with API integration"
  ```

- **Push to Repository**: Push your code to the remote repository.

  ```bash
  git push origin main
  ```

### 11. Submit Your Assignment

- **Submit the GitHub Repository Link**: Share the link to your GitHub repository.
- **Submit the Video Walkthrough**: Provide the screen recording link.

---

This guide provides a comprehensive overview and step-by-step instructions to complete the ReachInbox.ai assignment.
