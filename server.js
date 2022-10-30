const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;

// Middleware

app.use(express.static('public'));
app.use(express.json())


/* -------------------------- Home -------------------------- */
app.get("/", (request, response) => {
    response.sendFile("/index.html")
})

/* -------------------------- Categories -------------------------- */
app.get("/acting-habits", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/acting-habits.html')
})
app.get("/agents", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/agents.html')
})
app.get("/auditions", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/auditions.html')
})
app.get("/getting-started", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/getting-started.html')
})
app.get("/industry-tips", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/industry-tips.html')
})
app.get("/organization", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/organization.html')
})
app.get("/preparation", (request, response) => {
    response.sendFile(__dirname + '/public/Categories/preparation.html')
})

/* -------------------------- Posts -------------------------- */
app.get("/5-things-to-expect-from-your-talent-agent", (request, response) => {
    response.sendFile(__dirname + "/public/Posts/5-things-to-expect-from-your-talent-agent.html")
})
app.get("/5-things-to-know-about-headshots", (request, response) => {
    response.sendFile(__dirname + '/public/Posts/5-things-to-know-about-headshots.html')
})
app.get("/6-ways-to-have-a-better-relationship-with-your-agent", (request, response) => {
    response.sendFile(__dirname + '/public/Posts/6-ways-to-have-a-better-relationship-with-your-agent.html')
})
app.get("/8-things-to-avoid-in-an-acting-agent", (request, response) => {
    response.sendFile(__dirname + '/public/Posts/8-things-to-avoid-in-an-acting-agent.html')
})
app.get("/8-tips-on-how-to-become-an-actor", (request, response) => {
    response.sendFile(__dirname + '/public/Posts/8-tips-on-how-to-become-an-actor.html')
})
app.get("/14-things-to-keep-track-of-when-you-auditions", (request, response) => {
    response.sendFile(__dirname + '/public/Posts/14-things-to-keep-track-of-when-you-auditions.html')
})

/* -------------------------- 404 -------------------------- */
app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + '/public/404.html')
})



/* ------------------------------------------------------------------- */

// const http = require("http")
// const path = require("path")
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     // Build file path dynamic
//     let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)

//     // Extension of file
//     let extensionName = path.extname(filePath)

//     // Initial content type
//     let contentType = "text/html"

//     // Check ext and set content type
//     switch (extensionName) {
//         case ".js":
//             contentType = "text/javascript";
//             break;
//         case ".css":
//             contentType = "text/css";
//             break;
//         case ".json":
//             contentType = "application/json";
//             break;
//         case ".png":
//             contentType = "image/png";
//             break;
//         case ".jpg":
//             contentType = "image/jpg";
//             break;
//     }
//     if (contentType == "text/html" && extensionName == "") filePath += ".html";
//     // log the filePath
//     console.log(filePath);
//     // Read file
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code == "ENOENT") {
//                 // Page not found
//                 fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
//                     res.writeHead(404, { "Content-Type": "text/html" });
//                     res.end(content, "utf8");
//                 });
//             } else {
//                 // Some server error
//                 res.writeHead(500)
//                 res.end(`Server Error: ${err.code}`);
//             }
//         } else {
//             // Success
//             res.writeHead(200, { "Content-Type": contentType })
//             res.end(content, "utf8")
//         }
//     })
// })

/* ------------------------------------------------------------------- 
Contact Form
-------------------------------------------------------------------*/
const nodemailer = require('nodemailer');
require('dotenv').config()

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SECRET_ID,
            pass: process.env.SECRET_KEY,
        }
    })
    const mailOptions = {
        from: `req.body.email`,
        to: process.env.SECRET_ID,
        subject: `Message from ${req.body.name}`,
        text: `Name: ${req.body.name}
Email:${req.body.email}
Message: ${req.body.message}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log(`Email sent: ${info.response}`)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})