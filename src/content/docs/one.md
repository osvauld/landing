---
title: "Setting up for local development"
---

## Backend

first clone the repository

```bash
git clone github.com/osvauld/osvauld_be
cd osvauld_be
```
edit your app.env.example file to include your database credentials and rename it to app.env

```bash
air
```
This will start the backend server

Now go to `localhost:port/admin` to create the first admin user




To install and set up the web client extension in Chrome or Chromium-based browsers, follow these steps:

1. Open your browser and click on the three-dot menu in the top-right corner.
2. Navigate to **More tools** > **Extensions**.
3. In the Extensions page, enable the **Developer mode** toggle switch located in the top-right corner. This allows you to load unpacked extensions.

## Cloning the GitHub Repository

Next, you need to clone the GitHub repository for the web client extension:

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:
```bash
git clone git@github.com:osvauld/web-client.git
cd web-client
```

## Installing Dependencies and Building the Extension

Now, you'll install the necessary dependencies and build the extension:

1. Run the following command to install the dependencies:
```bash
npm install
```
2. Once the installation is complete, build the extension by running:
```bash
npm run dev
```
If the dev server is throwing Error, don't worry, it's trying to start the brave browser.
Goto the `rollup.config.js` and edit the start script to your preffered chromium based browser and you would be good to global. 

we recommend installing [extension reloader](https://chromewebstore.google.com/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid)
## Loading the Unpacked Extension

After building the extension, you can load it into your browser:

1. Go back to the Extensions page in your browser.
2. Click on the **Load unpacked** button that appears after enabling Developer mode.
3. Browse to the `public` folder within the cloned repository and select it.
4. The extension will be loaded into your browser.

## Configuring the Extension

Upon loading the extension, you will be prompted to enter the base URL:

1. Obtain the base URL from the JSON string provided by the admin.
2. Paste the base URL into the prompt.
3. Enter your username and password when prompted.

Congratulations! You have successfully installed and set up the web client extension. You are now ready to use it.