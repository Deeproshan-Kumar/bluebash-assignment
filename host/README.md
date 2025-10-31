# 🧩 React Micro Frontend using Module Federation (Chat & Email)
This project consists of multiple applications (Host, Chat App (Remote), and Email App (Remote)) integrated together using modern frontend tooling react micro frontend module federation.

---

## 🚀 Getting Started
Follow the steps below to set up and run the project locally.

# 1. Clone the Repository
Clone the repository from GitHub using the provided URL:

## bash
git clone 

# 2. Install Dependencies
Install the required dependencies for all three apps (Host, Chat App, and Email App):

## npm install
Make sure to run this command inside each app’s folder.

# 3. Run the Chat App
Start the Chat App (Host) in development mode:

## npm run dev

## Build Chat App CSS
To ensure the CSS works correctly in the host app (same as in the remote app), build Tailwind CSS manually:

# 4. Run the Email App
Start the Email App (Host) in development mode:

## npm run dev

## Build Email App CSS

## Build the CSS for the Email App as well:

npx tailwindcss -i ./src/index.css -o ./dist/chat.css --minify

# 5. Build the Host App
After configuring both apps, build the host application:

## npm run build

# 6. Preview the Build
Once built, you can preview the production-ready version:

## npm run preview

# 🧠 Notes
### Make sure all dependencies are installed correctly before running the apps.
### The Tailwind build command should be executed whenever you make CSS changes.
### Ensure each app runs on a unique port if running simultaneously.

# 🛠️ Tech Stack
### React / Vite
### Tailwind CSS