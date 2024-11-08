# Iframe Poc - Basic React App

Simple Dashboard for a frontend solana payments flow where we use the iframe from this repo: 
https://github.com/Superlogic/mpc-admin-retry-ui/tree/phantom-poc


## Local Development Steps:

1. `yarn install`
2. `yarn dev`

* Note this snippet is present in the app.ts: 
```
     <iframe
          src="http://localhost:5173"
          width="100%"
          height="600px"
          frameBorder="0"
        />
```
* Change ports as needed but default port for vite apps is 5173, 3000 for react apps
