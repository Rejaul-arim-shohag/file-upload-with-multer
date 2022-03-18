

//working with multipart form data "COPY CODE"

// const express = require('express');
// const bodyParser = require('body-parser');
// // const multer = require('multer');
// // const upload = multer();
// const app = express();
// app.use(bodyParser.json());
// // app.use(upload.array());
// // app.use(express.static('public'));
// app.post('/bodyParser', (req, res) => {
// 	const data = req.body;
// 	const dataString = JSON.stringify(data);
// 	const jsonName = data['name'];
// 	res.send(dataString);
// });
// app.listen(5000, () => {
// 	console.log('Server run successfully on port 5000');
// });



//working with multipart form data 
// const express = require("express")
// const bodyParser = require("body-parser")
// const multer  = require('multer')
// const app = express();
// const upload = multer()
// app.use(upload.array())
// app.use(bodyParser.json())
// app.get("/", (req, res)=>{
//     res.send("hello world");
//     res.end();
// });
// //question
// app.post("/datapost", (req, res)=>{
//     const data = req.body;
//     console.log(data)
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//     res.send("Data post successfully"+jsonData);
// })
// app.listen(8080, ()=>{
//     console.log("server running on port 8080")
// })


//https://afteracademy.com/blog/file-upload-with-multer-in-nodejs-and-express#:~:text=Multer%20adds%20a%20body%20object,multipart%2Fform%2Ddata).


//File upload With Multer
//multer first way and this way is not best
// const express = require("express");
// const multer  = require('multer');
// const app = express();

// app.get('/', (req, res)=>{
//     res.send("file upload system")
// })

// const upload = multer({destination: "./uploads/"}).single("demo");
// app.post("/uploadone",(req, res)=>{
//    upload(req, res, (err)=>{
//        if(err){
//            res.send("File upload fail")
//        }
//        else{
//            res.send("file upload success")
//        }
//    })
    // res.end("success")
// })


//multer second way
const express = require("express");
const multer  = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, './uploads')
    },
    filename:(req, file, callback)=>{
        callback(null, file.originalname)
    }
});

const upload = multer({storage:storage}).single("demo-image");

app.post("/upload", (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            res.send(err+"something is wrong, file upload faile")
        }
        else{
            res.send("file upload success")
        }
    })
})

app.listen(8080, ()=>{
    console.log("server running on port 8080")
})

