import fs from "fs";
import path from "path";

const [name] = process.argv.slice(2);

if (!name) throw new Error("You must include a component name");

const dir = path.resolve("./src/components", `./${name}/`);

if (fs.existsSync(dir))
  throw new Error("A component with that name already exists");

fs.mkdirSync(dir);

function wirteFileErrorHandler(err) {
  if (err) throw err;
}

const componentDir = path.resolve("./.generate_component", "./Example");

fs.readdir(componentDir, (err, filelist) => {
  filelist.forEach(async (file) => {
    let filename = "";
    let content = "";
    if (file === "index.js") filename = file;
    else filename = [name, ...file.split(".").slice(1)].join(".");

    const extension = file.split(".")[file.split(".").length - 1];
    if (extension !== "scss") {
      const { component } = await import(path.resolve(componentDir, file));

      content = extension === "js" ? component(name) : "";

      if (extension === "js") filename = filename.replace(/\.js$/, ".tsx");
      if (filename === "index.tsx")
        filename = filename.replace(/\.tsx$/, ".ts");
    }

    fs.writeFile(`${dir}/${filename}`, content, wirteFileErrorHandler);
  });
});
