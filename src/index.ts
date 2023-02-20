import { app } from "./app";

const PORT = process.env.PORT || 3333;

//listen port
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
