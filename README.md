# GlamAR Web Demo App

## Built With

- React
- Node.js
- Express
- Webpack

## Prerequisites

Make sure you have installed all of the following prerequisites:

- Node.js
- npm

## Clone the repository

To clone the repository:

```bash
git clone git@github.com:gofynd/glamar-web-demo.git
```

You can follow a thorough guide [here](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository)

## Starting the project

To start the project locally,

### 1. Install npm packages

```bash
yarn install
```

### 2. Setup local SSL certificate

1. First install **mkcert**. Refer this [link](https://github.com/FiloSottile/mkcert#example) to install it.
2. We will be using `mkcert` to generate locally-trusted development certificate.
   Use this command to generate SSL certificate

```bash
mkcert ssl/server-key.pem -cert-file ssl/server-cert.pem local.sdk.glamar.io
```

3. Create a folder named **ssl** at root level of repository.
4. Copy the two `.pem` files (i.e key.pem & cert.pem) generated above command to **ssl** folder

5. Next up we will bind `localhost or 127.0.0.1` to host name i.e `local.sdk.glamar.io`
6. open and edit `/etc/hosts` and insert

```bash
127.0.0.1       local.sdk.glamar.io
```

## How to Open /etc/hosts File

- **Mac:** Use Terminal and type `sudo nano /etc/hosts`.
- **Windows:** Open `hosts` file in Notepad as administrator from `C:\Windows\System32\drivers\etc`.

Remember to be cautious when editing system files like `hosts`.

### 3. Running the Project

1. To run the project locally, use the following command:

```bash
yarn serve
```

This command will start the server, and your code will be running on http://localhost:59089.

2. Open your web browser and navigate to http://localhost:59089 to view the project.

### 4. Setting Up GlamAR Activation Key

To use GlamAR's features, update the `TryonFrame.jsx` file with your GlamAR Activation Key. In `useEffect`, replace `'Replace it with your GlamAR Activation Key'` with your actual key. For SKU-specific features, refer to the GlamAR SDK documentation.
