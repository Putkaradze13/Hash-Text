const crypto = require("crypto");
const fsProm = require("fs").promises;

const file = process.argv[2];

async function hashText() {
  if (process.argv.length === 3) {
    const readFile = await fsProm.readFile(file);
    return crypto.createHash("md5").update(readFile).digest("hex");
  } else {
    throw new Error("error");
  }
}

hashText()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

const shutdown = () => process.exit();

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
