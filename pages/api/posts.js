import { DEFAULT_SCHEMA } from "js-yaml";
import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
    try {
        //SELECT * FROM customer_tb ORDER BY id DESC LIMIT 10
        const results = await sql_query('SELECT * FROM customer_tb');
        return res.json(results);
    }
    catch (e) {
        console.log("posts.js")
        res.status(500).json({ message: e.message});
    }
}

export default handler;