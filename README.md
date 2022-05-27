## Sketch Challenge QA
Repository that contains the exercise proposed by Sketch.


### Prerequisites
- Having node and npm installed.
- Install Cypress framework.
* npm
  ```sh
  cd /your/project/path
  npm install cypress --save-dev
  ```

### Installation
Install repository dependencies.

* Install NPM packages
   ```sh
   npm install


## Usage
* Create cypress.env.json file in the root folder with a structure like this, adding a valid credentials:
   ```sh
   {
    "user": "john.doe@example.com",
    "password": "12345678"
   }
  

From Cypress app:
* Open Cypress app
   ```sh
   ./node_modules/.bin/cypress open
* and then select the desired test spec to be run

From command line:
* Run all the test with Chrome (headless)
   ```sh
   npm run cy:run:chrome
