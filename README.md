# Installation Instructions

To install and run the application, please ensure Node.js is installed on your system. You can download Node.js from [here](https://nodejs.org/en/). Follow the steps below to set up the application:

1. **Clone the Repository**
    ```shell
    git clone https://github.com/yasharya2901/sumitra_frontend
    ```
2. **Navigate to the Project Directory**
    ```shell
    cd sumitra_frontend
    ```
3. **Install Dependencies**
    ```shell
    npm install
    ```
4. **Start the Application**
    ```shell
    npx expo start -c
    ```

    If the default port is in use, you can specify an alternative port:
    ```shell
    npx expo start -c --port 19000
    ```

    For viewing the application on a physical device while on a public network, use the tunnel option:
    ```shell
    npx expo start -c --tunnel
    ```

    This will generate a QR code, which can be scanned using the [Expo Go](https://expo.dev/go) app on your mobile device.

5. **Run the Application**
    Follow the options displayed in the terminal to run the application on an emulator or a physical device.
