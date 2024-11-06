# MySQL-to-DBML
The terminal based application in which user can add their database information, and gets the DBML script to use for ERMs in websites like https://dbdiagram.io/

# Manual

### Prerequisites
1. Node.js
2. VS Code


## 1. Clone repository
```
git clone https://github.com/HtunThiha/MySQL-to-DBML.git
```

## 2. Install packages
This package is required for MySQL => DBML conversion
```
npm install -g @dbms/cli
```

## 3. Edit .env
Go to .env file in the root folder, and input your database details
```
# Edit your database info here
# By default, host = localhost, port = 3306, and user = root
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

## 4. Run command
Run the program in the root directory
```
node index.js
```
You will be redirected to output.dbml in VS code editor.

Congrats! Now you can use this DBML script to use in ERM designs

Example: Go to https://dbdiagram.io/d and paste your DBML script there.
