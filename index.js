const bodyParser = require(`body-parser`)
const inquirer = require(`inquirer`)
const express = require(`express`);
const app = express()
const PORT = process.env.PORT || 3000;
const router =express.Router()
const fs = require(`fs`);
const { deserialize } = require("v8");
const mysql = require('mysql2');
// const Connection = require("mysql2/typings/mysql/lib/Connection");



// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'dal123456789+',
      database: 'deparments_db'
    },
    console.log(`Connected to the deparments_db database.`)
  );




employee_table= []


// questions

employeeoptions()
function employeeoptions(){
    inquirer.prompt({
        type:"list",
        message:"what would you like to do?",
        name:"role",
        choices:["add department", "add role", 'add employee']

    })
.then(function(department,{department_name,ID}){
    db.query(`INSERT INTO Deparment(department_name) VALUES ?`,("department_name","ID"),
        function(err,results){
            if(err) throw err
        })
    if (department === "add department") {
        inquirer.prompt([
            {type:'input',
            message:"which department:",
            name:'department'},

            {type:"list",
            message:"what would you like to do?",
            name:"role",
            choices:["add department", "add role", 'add employee']},
            
            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }

        ]).then(function(){
            let adddepartment = new adddepartment
            employee_table.push(adddepartment)

            if(addmore === `yes`){
                employeeoptions()
            }else{
                return
            }
        })
    }else if (department === "add role"){
        inquirer.prompt([
            {type:'input',
            message:"What is the name of the role?",
            name:"rolename",

            },

            {type:"input",
            message:"what is the salary of the role?",
            name:"salary",

            },

            {type:"input",
            message:"which department this role belongs too?",
            name:"departmentlocation"
            },

            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }


        ]).then(function(){
            let addrole= new addrole
            employee_table.push(addrole)

            if (addmore=== `yes`){
                employeeoptions()
            }else{
                return
            }
        })
    }else if (department === "add employee"){
        inquirer.prompt([
            {type:'input',
            message:"What is the employees first name?",
            name:"firstname",

            },

            {type:"input",
            message:"what is the employees last name?",
            name:"lastname",

            },

            {type:"input",
            message:"what is the employees role?",
            name:"employees role"
            },

            {
            type:"input",
            message:"whos is the employees manager",
            name:"employeesmanager",
            },

            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }


        ]).then(function(){
            let addemployee= new addemployee
            employee_table.push(addemployee)

            if (addmore=== `yes`){
                employeeoptions()
            }else{
                return
            }
        })
            
        
    
        
    }
})
}

           
           
        
  
