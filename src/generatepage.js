const fs = require('fs');

let pageHandler = `
<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <div class = "container">
  <div class = "row">
  <body style ='background-color: darkcyan'>
  `;

module.exports = data => {
    fs.writeFile('./dist/index.html', pageHandler, err => { });

    for (i = 0; i < data.length; i++) {
        if (data[i].type === 'Manager') {
            let employeeCard = `
        <div class = "col-sm-12">
        <div class = "card">
        <div class = "card-body">
        <h3 class = 'card-title'>${data[i].name}</h3>
        <h3 class = 'card-title'>${data[i].type}</h3>
        <p class='white card-text'>Emp. ID: ${data[i].empID}</p>
        <a href ="mailto:${data[i].email}">${data[i].email}</a>
        <p class='white card-text'>Office: ${data[i].office}</p>
        </div>
        </div>
        </div>
        <div class="row">`;
        fs.appendFile("./dist/index.html", employeeCard, err => { });
        }

        else if (data[i].type === 'Engineer') {
            let employeeCard = `
            <div class = "col-sm-4">
            <div class = "card">
            <div class = "card-body">
            <h3 class = 'card-title'>${data[i].name}</h3>
            <h3 class = 'card-title'>${data[i].type}</h3>
            <p class='white card-text'>Emp. ID: ${data[i].empID}</p>
            <a href ="mailto:${data[i].email}">${data[i].email}</a>
            <p class='white card-text'>Office: ${data[i].gitHub}</p>
            </div>
            </div>
            </div>`;
            fs.appendFile("./dist/index.html", employeeCard, err => { });

        }

        else if (data[i].type === 'Intern') {
            let employeeCard = `
            <div class ="col-sm-4">
            <div class = "card">
            <div class = "card-body">
            <h3 class = 'card-title'>${data[i].name}</h3>
            <h3 class = 'card-title'>${data[i].type}</h3>
            <p class='white card-text'>Emp. ID: ${data[i].empID}</p>
            <a href ="mailto:${data[i].email}">${data[i].email}</a>
            <p class='white card-text'>School: ${data[i].school}</p>
            </div>
            </div>
            </div>`;
            fs.appendFile("./dist/index.html", employeeCard, err => { });

        }

        else {
            console.log("ERROR: NO TYPE DEFINED");
        };
    };
};