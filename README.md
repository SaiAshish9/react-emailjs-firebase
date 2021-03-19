## Rules:

```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

```
sudo npm i -g firebase-tools
firebase login
firebase init
Functions
Use an existing project
yes -> yes
cd functions
npm i nodemailer dotenv
firebase deploy
```

## firebase.json

```
{
  "functions": {
    "predeploy": [
    ]
  }
}


```
## .env file

```
SENDER_EMAIL=
SENDER_PASSWORD=
```

## Manage Less Secure App's

```
Gmail->Manage Your Account->Security->Less secure apps
```
