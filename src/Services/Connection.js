exports.connectionString=()=>{
   
    const object={
        hostname:'localhost',
        dbname:process.env.DB_NAME,
        port:27017,
        username:'root',
        password:'secret',

    }

    return `mongodb://${object.username}:${object.password}@${object.hostname}:${object.port}/${object.dbname}?authSource=admin`
}