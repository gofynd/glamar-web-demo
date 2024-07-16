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
$ git clone git@github.com:gofynd/glamar-web-demo.git
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
$ mkcert -key-file key.pem -cert-file cert.pem "*.glamar.io"
```

3. Create a folder named **ssl** at root level of repository.
4. Copy the two `.pem` files (i.e key.pem & cert.pem) generated above command to **ssl** folder

5. Next up we will bind `localhost or 127.0.0.1` to host name i.e `local.sdk.glamar.io`
6. open and edit `/etc/hosts` and insert

```bash
127.0.0.1       local.sdk.glamar.io
```

**How to Open /etc/hosts File**

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

### 5. Usage

If you are using via npm, then you need to import the GlamAR SDK as a module. Then you can call the APIs available on the GlamAR object.

> Import GlamAR module

```js
import * as GlamAR from 'glamar-sdk';
```

> Init GlamAR module with your API KEY

```js
// Pass in the id of a container and your API key
GlamAR.init('GlamAR-module', <<YOUR_ACCESS_KEY>>, {
  platform: 'web',
  mode: ’private’,
  hideTryOnScreen: false,
  theme: 'dark',
  hideLiveCamera: false,
  hideModelTryOn: false,
  hideUploadMode: false 
});
GlamAR.addEventListener('opened', () =>
    GlamAR.applyMakeupBySku(<<SKU_ID>>)
);
```

> Call applyMakeupBySku on any event to apply the makeup

```html
<button onclick="GlamAR.applyMakeupBySku(<<SKU_ID>>)">Apply Lip Color</button>
```

#### API Reference

##### Methods

<table> 
  <tr>
    <th>Methods</th>
    <th>Description</th>
  </tr>

  <tr>
    <td><b>init</b></td>
    <td>GlamAR.init(containerId, apiKey, openLiveMakeup) </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> <br></br>
      <ul>
        <li> <b>containerId:</b> string, id of the div to mount the widget </li>
        <li> <b>apiKey:</b> string, api key </li> 
        <li> <b>openLiveMakeup(optional):</b> boolean, whether to open widget in live mode. </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>Initializes the widget</td>
  </tr>

  <tr>
    <td><b>applyMakeupBySku</b></td>
    <td>GlamAR.applyMakeupBySku(skuId, callback) </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> <br></br>
      <ul>
        <li> <b>skuId:</b> number, a sku ID </li>
        <li> 
          <b>callback(optional):</b> 
          function, fires after the makeup effect is applied 
        </li> 
      </ul>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>
      Changes the makeup effect by the given sku ID, you could retrieve your sku information from admin panel.
    </td>
  </tr>
  
  <tr>
    <td><b>addEventListener</b></td>
    <td>GlamAR.addEventListener(eventName, handlerFunction) </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> <br></br>
      <ul>
        <li> <b>eventName:</b> string, a named event </li>
        <li> <b>handlerFunction:</b> function, a handler </li> 
      </ul>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>Adds the listener to the given event name.</td>
  </tr>
  
  <tr>
    <td><b>removeEventListener</b></td>
    <td>GlamAR.removeEventListener(eventName, handlerFunction) </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> <br></br>
      <ul>
        <li> <b>eventName:</b> string, a named event </li>
        <li> <b>handlerFunction:</b> function, a handler </li> 
      </ul>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>Removes the given listener for the event name.</td>
  </tr>
  
  <tr>
    <td><b>getAllSKUs</b></td>
    <td>GlamAR.getAllSKUs() </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> None<br></br>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Return Value:</b> 
      Promise that resolves to an array of SKUs available for the given API key.
    </td>
  </tr>
  <tr>
    <td></td>
    <td>Returns an array of available SKUs for the given API key.</td>
  </tr>
  
  <tr>
    <td><b>reset</b></td>
    <td>GlamAR.reset() </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> None<br></br>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>Removes all the makeup effects from the canvas.</td>
  </tr>
  
  <tr>
    <td><b>close</b></td>
    <td>GlamAR.close() </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> None<br></br>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> None</td>
  </tr>
  <tr>
    <td></td>
    <td>Closes canvas and back to main widget page.</td>
  </tr>
  
  <tr>
    <td><b>snapshot</b></td>
    <td>GlamAR.snapshot(contentType) </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> <br></br>
      <ul>
        <li> <b>contentType:</b> string, valid value: `base64` or `blob`</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b>  image in `base64` or `blob`</td>
  </tr>
  <tr>
    <td></td>
    <td>Takes a snapshot of current result window.</td>
  </tr>
  
  <tr>
    <td><b>isLoaded</b></td>
    <td>GlamAR.isLoaded() </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> None<br></br>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> `true` if the module is loaded else `false`</td>
  </tr>
  <tr>
    <td></td>
    <td>Returns status of module loading.</td>
  </tr>
  
  <tr>
    <td><b>isLoading</b></td>
    <td>GlamAR.isLoading() </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <b>Parameters:</b> None<br></br>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><b>Return Value:</b> `true` if the module is loading else `false`</td>
  </tr>
  <tr>
    <td></td>
    <td>Returns status of module loading.</td>
  </tr>
  
</table>

#### Events

| Events            | Description                                                                                                                                                       |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **loaded**        | Payload: None<br></br>This event is fired when GlamAR module is loaded                                                                                            |
| **opened**        | Payload: None<br></br>This event is fired when the GlamAR module is opened.                                                                                       |
| **closed**        | Payload: None<br></br>This event is fired when the canvas is closed and user returns to main widget page.                                                         |
| **camera-opened** | Payload: None<br></br>This event is fired when the camera is opened.                                                                                              |
| **camera-closed** | Payload: None<br></br>This event is fired when the camera is closed.                                                                                              |
| **camera-failed** | Payload: None<br></br>This event is fired when the camera failed. Either user refuses to grant permission or the app is unable to retrieve video stream normally. |
| **photo-loaded**  | Payload: None<br></br>This event is fired when a given photo loaded on the canvas.                                                                                |
| **sku-applied**   | Payload: None<br></br>This event is fired when a given sku effects are applied.                                                                                   |
| **sku-failed**    | Payload: None<br></br>This event is fired when a given sku is not applied successfully.                                                                           |
| **reset**         | Payload: None<br></br>This event is fired when all the effects are reset.                                                                                         |
| **error**         | Payload: Error<br></br>This event is fired anytime an error occurs.                                                                                               |

---
