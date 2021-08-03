import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host    : process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user    : process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
    }
});

export async function sql_query(query_string,values = []){
    try {
        const result = await db.query(query_string, values)
        await db.end()
        return result
    }
    catch (e) {
        console.log("db.js sql_query")
        throw Error(e.message)
    }
}

// sql_query("SELECT * FROM <table_name> ORDER BY id DESC LIMIT 10")