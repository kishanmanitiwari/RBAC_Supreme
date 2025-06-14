import express from "express";
import authorize from "./authorize.mjs";
import validateUser from "./auth.mjs";

const app = express();

//middleware
app.use(express.json());
app.use(validateUser);

app.get("/read", authorize("read"), (req, res) => {
  res.send("📖 You can read the content.");
});

app.post("/create", authorize("create"), (req, res) => {
  res.send("✅ You created a post.");
});

app.put("/edit", authorize("edit"), (req, res) => {
  res.send("✏️ You edited the post.");
});

app.delete("/delete", authorize("delete"), (req, res) => {
  res.send("🗑️ You deleted the post.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
