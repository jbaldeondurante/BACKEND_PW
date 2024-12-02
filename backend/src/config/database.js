import Sequelize from "sequelize";

const hostname = 'prograweb20242.postgres.database.azure.com'
const username = 'postgres'
const password = 'contrasenaComplicada123'
const database = 'inatstore'
const port = 5432;
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password,{
    host: hostname,
    port: port,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;