import express from "express"
import cors from "cors"
import pool from "./db/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000
app.use(cors({
  origin: "*"
}));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get('/allgenre/books', async(req, res) => {
  try{
    const database = await pool.query(" SELECT * FROM books ORDER BY RANDOM() LIMIT 15")
    const data = database.rows;

    res.status(200).json({
      success:true,
      output:data
    })
  }catch(err){
    res.status(500).json({
      success:false,
      error:err
    })
  }
})
app.get("/specific/books", async (req, res) => {
  const { categoryId } = req.query;

  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = $1',[categoryId]);

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.get('/books/fantasy', async(req, res) => {
  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = 2 LIMIT 8');

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
})
app.get('/books/program', async(req, res) => {
  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = 3 LIMIT 8');

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
})
app.get('/books/history', async(req, res) => {
  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = 4 LIMIT 8');

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
})
app.get('/books/selfhelp', async(req, res) => {
  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = 8 LIMIT 4');

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
})
app.get('/books/fiction', async(req, res) => {
  try {
    const database = await pool.query('SELECT books.* FROM books JOIN categories ON books.category_id = categories.id WHERE categories.id = 8 LIMIT 4');

    const data = database.rows;

    res.status(200).json({success:true,output:data});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
})

app.listen(port, () => {
  console.log("Server running successfully");
});