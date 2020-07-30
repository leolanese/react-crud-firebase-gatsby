### Top Trumps App

Implemented CRUD App using: React (Hooks), Gatsby, Firebase, JS, CSS and HTML.

### Deployment Process:
```javascript
git clone https://github.com/leolanese/react-crud-firebase-gatsby.git
cd react-crud-firebase-gatsby

npm install
gatsby develop

open http://localhost:8000
```

### ERROR #98123  WEBPACK. Generating SSR bundle failed.
```javascript
...
[BABEL] /Users/tyson/workspace/react-crud-firebase-gatsby/.cache/develop-static-entry.js: Cannot find module '@babel/compat-data/corejs3-shipped-proposals'
...
```

#### Solution 1
In case of this error, what we need is to install Babel and any other dependency requested (it could require few more depending on your SO system, configuration and setup):
```
npm i --save @babel/compat-data
```

#### Solution 2:
Use this command instead the usual: "gatsby develop"
```javascript
npm run develop
```

##### Solution 3

>Error number report is here: "ERROR #98123 WEBPACK" https://github.com/gatsbyjs/gatsby/issues/17557

```
-Remove package-lock.json and/or yarn.lock
-Issue gatsby clean to purge any stale data.
-Remove node_modules folder.
-Install the dependencies again with your package manager of choice, either npm or yarn.
-Issue gatsby develop and see if the error does not pop back.
-These because if memory serves me right it could be some issue with a package.

```

##### Solution 4
The error mentioned: "Cannot find module '@babel/compat-data/corejs3-shipped-proposals'"
Try re- install babel global: 
```javascript
npm install -g --save-dev @babel/core @babel/cli
```

---

### App arquitecture
![Top Trumps App files](https://i.ibb.co/dmvSdcz/Screenshot-2020-07-29-at-14-48-59.png)


### Deploy using Gatsby from terminal
![Gatsby running](https://i.ibb.co/t3qtx7L/Screenshot-2020-07-29-at-14-05-59.png)


### Running on localhost:8000
![App running](https://i.ibb.co/r6FHQbk/Screenshot-2020-07-29-at-14-08-00.png)


### Firebase Bd
![Firebase setup](https://i.ibb.co/Q9WX1ZT/Screenshot-2020-07-29-at-14-26-10.png)

---

### My personal Firebase App configuration (you can use it just now or register your own)

```javascript
const firebaseConfig = {
  apiKey: 'AIzaSyDTi-OML7L_TJF5D7lVT0mN_QosjC1-y-8',
  authDomain: 'react-crud-firebase-1a58c.firebaseapp.com',
  databaseURL: 'https://react-crud-firebase-1a58c.firebaseio.com',
  projectId: 'react-crud-firebase-1a58c',
  storageBucket: 'react-crud-firebase-1a58c.appspot.com',
  messagingSenderId: '939482785604',
  appId: '1:939482785604:web:efc98fd2dd19061b355911',
}
```



