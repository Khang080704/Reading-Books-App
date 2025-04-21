import sql from 'mssql';

const config: sql.config = {
    user: process.env.SQLSERVER_USERNAME,
    password: process.env.SQLSERVER_PASSWORD,
    server: process.env.SQLSERVER_HOST || '127.0.0.1',
    database: process.env.SQLSERVER_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log('Connect successfully !!!!')
        return pool
    })
    .catch((err) => {
        console.log('Connect Failed !!!', err)
        throw err
    })
export {sql, poolPromise}