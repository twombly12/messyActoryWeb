const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

const nodemailer = require("nodemailer");
require("dotenv").config();

// Middleware

app.use(express.static("public"));
app.use(express.json());

/* -------------------------- Home -------------------------- */
app.get("/", (request, response) => {
    response.sendFile("/index.html");
});

/* -------------------------- Categories -------------------------- */
app.get("/acting-habits", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/acting-habits.html");
});
app.get("/agents", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/agents.html");
});
app.get("/auditions", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/auditions.html");
});
app.get("/getting-started", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/getting-started.html");
});
app.get("/industry-tips", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/industry-tips.html");
});
app.get("/organization", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/organization.html");
});
app.get("/preparation", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/preparation.html");
});
app.get("/mindset", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/mindset.html");
});
app.get("/learning-from-others", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/learning-from-others.html");
});
app.get("/scene-study", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/scene-study.html");
});
app.get("/training", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/training.html");
});
app.get("/everyday-life", (request, response) => {
    response.sendFile(__dirname + "/public/Categories/everyday-life.html");
});

/* -------------------------- Posts -------------------------- */
app.get("/5-things-to-expect-from-your-talent-agent", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/5-things-to-expect-from-your-talent-agent.html"
    );
});
app.get("/5-things-to-know-about-headshots", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/5-things-to-know-about-headshots.html"
    );
});
app.get(
    "/6-ways-to-have-a-better-relationship-with-your-agent",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/6-ways-to-have-a-better-relationship-with-your-agent.html"
        );
    }
);
app.get("/8-things-to-avoid-in-an-acting-agent", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/8-things-to-avoid-in-an-acting-agent.html"
    );
});
app.get("/8-tips-on-how-to-become-an-actor", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/8-tips-on-how-to-become-an-actor.html"
    );
});
app.get(
    "/14-things-to-keep-track-of-when-you-auditions",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/14-things-to-keep-track-of-when-you-auditions.html"
        );
    }
);
app.get("/5-thoughts-to-eliminate-as-an-actor", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/5-thoughts-to-eliminate-as-an-actor.html"
    );
});
app.get("/6-tips-on-how-to-handle-audition-nerves", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/6-tips-on-how-to-handle-audition-nerves.html"
    );
});
app.get(
    "/6-ways-to-break-negative-thinking-as-an-actor",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/6-ways-to-break-negative-thinking-as-an-actor.html"
        );
    }
);
app.get("/5-acting-lessions-from-squid-game-pilot", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/5-acting-lessions-from-squid-game-pilot.html"
    );
});
app.get("/7-tips-on-how-to-handle-audition-nerves", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/7-tips-on-how-to-handle-audition-nerves.html"
    );
});
app.get("/5-breathing-exercises-for-actors", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/5-breathing-exercises-for-actors.html"
    );
});
app.get(
    "/6-ways-to-break-negative-thinking-as-an-actor",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/6-ways-to-break-negative-thinking-as-an-actor.html"
        );
    }
);
app.get("/4-answers-to-the-question-how-do-actors-cry", (request, response) => {
    response.sendFile(
        __dirname + "/public/Posts/4-answers-to-the-question-how-do-actors-cry.html"
    );
});
app.get(
    "/7-things-i-learned-as-number-1-on-the-callsheet",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/7-things-i-learned-as-number-1-on-the-callsheet.html"
        );
    }
);

app.get(
    "/3-props-to-use-during-your-auditions",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/3-props-to-use-during-your-auditions.html"
        );
    }
);

app.get(
    "/7-ways-to-be-a-good-reader",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/7-ways-to-be-a-good-reader.html"
        );
    }
);

app.get(
    "/things-to-expect-when-dating-an-actor",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/things-to-expect-when-dating-an-actor.html"
        );
    }
);

app.get(
    "/6-things-you-need-for-your-self-tape-setup",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/6-things-you-need-for-your-self-tape-setup.html"
        );
    }
);

app.get(
    "/how-to-read-a-call-sheet-part-1",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/how-to-read-a-call-sheet-part-1.html"
        );
    }
);

app.get(
    "/how-to-read-a-call-sheet-part-2",
    (request, response) => {
        response.sendFile(
            __dirname +
            "/public/Posts/how-to-read-a-call-sheet-part-2.html"
        );
    }
);

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

app.post("/", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SECRET_ID,
            pass: process.env.SECRET_KEY,
        },
    });
    const mailOptions = {
        from: `req.body.email`,
        to: process.env.SECRET_ID,
        subject: `Message from ${req.body.name}`,
        text: `Name: ${req.body.name}
Email:${req.body.email}
Message: ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send("error");
        } else {
            res.send("success");
            res.redirect("/");
        }
    });
});

/* -------------------------- 404 -------------------------- */
app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + "/public/404.html");
});

/* -------------------------- Listen -------------------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});