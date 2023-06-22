const { join, extname, basename } = require('path');
const { readdirSync, renameSync } = require('fs');

function baseName(str, sep){
  return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
  return str.substr(0,str.lastIndexOf('.'));
}

for (const oldFile of readdirSync(__dirname)) {
  let [name, ...rest] = oldFile.split(".")
  const extension = rest.join(".")
  let short_name= name.slice(0,20)  
  console.log(oldFile, "->", short_name + "." + extension)
  if (true) {
    try{
      renameSync(oldFile, short_name + "."+ extension);
    } catch (error) {
      console.error(error)
    }
  }
}
