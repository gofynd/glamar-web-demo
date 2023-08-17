# GlamAR Web

## Running the project locally

### Install npm packages

```bash
yarn install
```

### Enable https

Install mkcert or build from [here](https://github.com/FiloSottile/mkcert).

Add `127.0.0.1	local.sdk.glamar.io` entry in `/etc/hosts` file

Create ssl directory in the root of the project.

Use the following cmd to generate the certificate and key.

```bash
mkcert -key-file ssl/server-key.pem -cert-file ssl/server-cert.pem local.glamar-js.amlfynd.de
```


