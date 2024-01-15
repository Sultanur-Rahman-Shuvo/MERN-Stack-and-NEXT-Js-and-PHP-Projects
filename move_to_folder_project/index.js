import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let bPath = "c:\\Users\\sulta\\Desktop\\move_to_folder_project\\index.js"

let file = await fs.readdir(bPath)

for (const i of file) {
    let lastI = i.split(".")[i.split(".").length - 1]
    if (lastI != "js" && lastI != "json" && i.split(".").length > 1) {
        if (fsn.existsSync(path.join(bPath, lastI))) {
            fs.rename(path.join(bPath, i), path.join(bPath, lastI, i))
        } else {
            fs.mkdir(lastI)
            fs.rename(path.join(bPath, i), path.join(bPath, lastI, i))
        }
    }
}