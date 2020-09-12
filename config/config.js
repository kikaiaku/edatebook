require("dotenv").config();
module.exports = 
{
  "development": {
    "username": "root",
    "password": process.env.db_password,
    "database": "eDate_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Queen1tj",
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }

};

