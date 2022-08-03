const { Router } = require("express");
const express = require("express")
const app = require("express")()
const path = require("path")


app.use(express.static('dist'));




app.use("/api", Router().get("/api", (req, res) => {
   res.send("some files")
}))

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});