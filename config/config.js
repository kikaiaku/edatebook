require("dotenv").config();
module.exports = 
{
  "development": {
    "username": "root",
    "password":  process.env.db_password,
    "database": "edate_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.db_password,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }

};

