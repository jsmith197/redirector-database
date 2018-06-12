const database = require("./database-connection");

module.exports = {
    list(){
      return database("users").select()
    },
    create(users){
      return database("users").insert(users).returning("*").then(record => record[0])
    },
    update(username, users){
      return database("users").update(users).where("username", username).returning("*").then(record => record[0])
    },
    delete(username){
      return database("users").delete().where("username", username)
    },
    profile(username){
      return database("users").select().where("username", username).first("")
    },
};
