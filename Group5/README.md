# Quick Care System

This system is composed of 3 main applications such as: API, Mobile and Web applications.

## Requirements

- You have to download and install **Nodejs** in order to run all these applications
  Download it here:

  - Linux:[https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04 "Download Nodejs on Ubuntu")
  - Windows:[https://nodejs.org/en/download](https://nodejs.org/en/download "Download Nodejs on Windows")
- You have to install **MySQL** locally in your machine. The recommended tool is to install **Xampp** which comes with **MySQL** and a web application calls **Phpmyadmin** which help us to visualize database data

  - Linux: [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html "Download xampp for Linux")
  - Windows: [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html "Download xampp for windows")
- Download and install **expo GO** on **PlayStore** used to test the mobile application directly on the hard device.

## Launch applications

#### **Step 1: Create the database**

The name of the database has to be equal to **quick-care**

#### **Step 2: Install dependencies for each application**

**API**

- Change directory to the api folder

  ```bash
  cd api
  ```
- Install dependencies

  ```bash
  npm install
  ```

**WEB**

- Change directory to the web folder

```bash
cd web
```

- Install dependencies

  ```bash
  npm install
  ```

**MOBILE**

- Change directory to the mobile

  ```bash
  cd mobile
  ```
- Install dependencies

  ```bash
  npm install
  ```

#### Step 3: Launch application

**DATABASE**

Launch the database first

**API**

- Execute the following command

  ```bash
  npm run start
  ```

**WEB**

- Execute the following command

  ```
  npm run dev
  ```

**MOBILE**

- Execute the following command

  ```
  npm run start
  ```

#### Step 4: Run the application

- Open the following link in the browser: [http://localhost:5173](http://localhost:5173 "Run the web application") to use the web application
- Open **Expo Go** and scan the **QR Code** generated after launching the mobile application in the previous step.
