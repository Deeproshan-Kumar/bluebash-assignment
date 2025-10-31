const learn = () => {
  return (
    <section className="h-full w-full overflow-y-auto">
      <div className="px-4 py-8">
        <h1 className="text-black text-3xl font-bold mb-4">Learn</h1>
        <p className="text-gray-500 mb-3">
          Follow the steps below to set up and run the project locally.n
        </p>
        <ul>
          <li>
            <h4 className="text-lg font-bold mb-4">#1 Clone the Repository</h4>
            <p className="text-gray-500 mb-3">
              Clone the repository from GitHub using the provided URL:
            </p>
            <p><strong>https://github.com/Deeproshan-Kumar/bluebash-assignment</strong></p>
            <p className="text-gray-500 mb-3">🔵 bash</p>
            <p className="text-gray-500 mb-3">🔵 git clone</p>
          </li>
          <li>
            <h4 className="text-lg font-bold mb-4">#2 Install Dependencies</h4>
            <p className="text-gray-500 mb-3">
              🔵 Install the required dependencies for all three apps (Host, Chat
              App, and Email App):
            </p>
            <p className="text-gray-500 mb-3">🔵 npm install</p>
            <p className="text-gray-500 mb-3">
              🔵 Make sure to run this command inside each app’s folder.
            </p>
          </li>
          <li>
            <h4 className="text-lg font-bold mb-4">#3 Run the Chat App</h4>
            <p className="text-gray-500 mb-3">
              🔵 Start the Chat App (Host) in development mode:
            </p>
            <p className="text-gray-500 mb-3">🔵 npm run dev</p>
            <p className="text-gray-500 mb-3">🔵 Build Chat App CSS</p>
            <p className="text-gray-500 mb-3">
              🔵 To ensure the CSS works correctly in the host app (same as in the
              remote app), build Tailwind CSS manually:
            </p>
          </li>
          <li>
            <h4 className="text-lg font-bold mb-4">#4 Run the Email App</h4>
            <p className="text-gray-500 mb-3">
              🔵 Start the Email App (Host) in development mode:
            </p>
            <p className="text-gray-500 mb-3">🔵 npm run dev</p>
            <p className="text-gray-500 mb-3">🔵 Build Email App CSS</p>
            <p className="text-gray-500 mb-3">
              🔵 Build the CSS for the Email App as well:
            </p>
            <p className="text-gray-500 mb-3">
              🔵 npx tailwindcss -i ./src/index.css -o ./dist/chat.css --minify
            </p>
          </li>
          <li>
            <h4 className="text-lg font-bold mb-4">#5 Build the Host App</h4>
            <p className="text-gray-500 mb-3">
              🔵 After configuring both apps, build the host application:
            </p>
            <p className="text-gray-500 mb-3">🔵 npm run build</p>
          </li>
          <li>
            <h4 className="text-lg font-bold mb-4">#6 Preview the Build</h4>
            <p className="text-gray-500 mb-3">
              🔵 Once built, you can preview the production-ready version:
            </p>
          </li>
          <li>
            <p className="text-gray-500 mb-3">🔵 npm run preview</p>
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-4">🧠 Notes</h2>
        <ul>
          <li className="text-gray-500 mb-3">
            🔵 Make sure all dependencies are installed correctly before running
            the apps.
          </li>
          <li className="text-gray-500 mb-3">
            🔵 The Tailwind build command should be executed whenever you make CSS
            changes.
          </li>
          <li className="text-gray-500 mb-3">
            🔵 Ensure each app runs on a unique port if running simultaneously.
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-4">🛠️ Tech Stack</h2>
        <ul>
          <li className="text-gray-500 mb-3">🔵 React / Vite</li>
          <li className="text-gray-500 mb-3">🔵 Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
};

export default learn;
