import {Pool} from 'pg'

const pool = new Pool({
    user: "postgres",
    password: "admin1234",
    host: "localhost",
    port: 5432,
    database: "notionclonedb"
})

export default pool;