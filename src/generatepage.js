const fs = require('fs');

let pageHandler = `
<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body style ='background-color: darkcyan'>
  `;

module.exports = data => {

    fs.writeFile('./dist/index.html', pageHandler, err => { });
    console.log(data);
     fs.appendFile("./dist/index.html", data, err => { })
     
    for (i = 0; i > data.length; i++) {
        let employee = data[0];
        let employeeCard = `<div class = "card"><h2>${employee}</h2></div>`;
       ;
    };
    let pageEnder = `
    </body>
    </html>
    `;
    fs.appendFile("./dist/index.html", pageEnder, err =>{});
};