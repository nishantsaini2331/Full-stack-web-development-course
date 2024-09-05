const fs = require("fs");
const os = require("os")

// console.log(__dirname  +"/abc.txt")
// console.log(__dirname  +"abc.txt")
// const res = fs.writeFileSync(__dirname  +"/abc.txt" , "hello sir ")
// const res = fs.writeFileSync(`${__dirname}/abc.txt` , "hello sir ji ")

// fs.writeFile(`${__dirname}/abc.txt` , "hello sir ji " ,function (err){
//     if (err) throw err;
//     console.log('The file has been saved!');
//   })

// console.log(fs)

// console.log("1")
// const data = "a".repeat(500 * 1024 *1024)
// let data2 = fs.writeFileSync("abc.txt" , data)
// // console.log(data)
// console.log("2")

// console.log("1");
// const data = "a".repeat(500 * 1024 * 1024);
// fs.writeFile("abc.txt", data, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("manla done hai");
//     }
// });

// console.log("2");

// console.log("1")
// fs.readFile("abc.txt" , "utf-8" , (err, data) => {
// if(err) throw err;
// else {
//     console.log(data)
// }
// })

// console.log("2")

// fs.unlink("hello.js") //delete file

// fs.appendFile("abc.txt", "hello ji \n" , (err) => {
//     if(err) throw err;
//     console.log("done")
// })

// fs.copyFile("abc.txt" ,"xyz.txt" )

// fs.mkdir("hello/anotherfile.js",  {recursive : true} ,(err, path) => {
//     if (err) throw err;
//     else {
//         console.log(path);
//     }
// });

// fs.rm("hello" , {recursive  : true})

// console.log(__dirname)
// console.log(__dirname.replace("lec 69", "lec 68"))

// fs.readdir(__dirname.replace("lec 69", "lec 68"), {encoding  : "utf-8" ,recursive  :true }, (err, file) => {
//     if (err) throw err;
//     else console.log(file);
    
// });


//  const rezs = fs.readdir("ffg" ,  { withFileTypes : true}, (err, file) => {

//         console.log(file)
//  })




// fs.rename("abc.txt", "ABC.txt")

// const res =  fs.readdirSync(__dirname.replace("lec 69", "lec 68") , {withFileTypes  :true})
// console.log(res)

// console.log(os.cpus().length)
// console.log(os.arch())

 