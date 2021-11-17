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
        //MySQL password
       password: 'dal123456789+',
       database: 'deparments_db'
     },
     console.log(`Connected to the deparments_db database.`)
   );


// questions

employeeoptions()
function employeeoptions(){
    inquirer.prompt([{
        type:"list",
        message:"what would you like to do?",
        name:"type",
        choices:["add department", "add role", 'add employee']

    }])
.then(function({type}){
    if (type === "add department") {
        inquirer.prompt([
            {type:'input',
            message:"which department:",
            name:'department'
        },
            
            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }

        ]).then(function({department,addmore}){
            db.query(`INSERT INTO Department(name) VALUES  (?)`,(department),
            function(err,results){
                if(err) throw err
            })
            if(addmore === `yes`){
                employeeoptions()
            }else{
                console.log('done')
            }
        })
    }else if (type === "add role"){
        inquirer.prompt([
            {type:'input',
            message:"What is the name of the role?",
            name:"title"

            },

            {type:"input",
            message:"what is the salary of the role?",
            name:"salary"

            },

            {type:"input",
            message:"which department this role belongs too?",
            name:"department"
            },

            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }
        ]).then(function({title,salary,department, addmore}){
            console.log(title, salary, department)
            db.query('insert into role set title = ?, salary=?, department_id=?',[title, salary, department])
            if(addmore === `yes`){
                employeeoptions()
            }else{
                console.log('done')
            }
        })
    }else if (type === "add employee"){
        inquirer.prompt([
            {type:'input',
            message:"What is the employees first name?",
            name:"first_name",

            },

            {type:"input",
            message:"what is the employees last name?",
            name:"last_name",

            },

            {type:"input",
            message:"what is the employees role?",
            name:"role_id"
            },

            {
            type:"input",
            message:"whos is the employees manager",
            name:"manager_id",
            },

            {type:"list",
            message: " would you like to add more?",
            choices: [`yes`,`no`],
            name:'addmore'
            }


        ]).then(function({first_name,last_name,role_id,manager_id,addmore}){
            db.query('insert into employee set first_name = ?, last_name=?, role_id=?, manager_id=?',[first_name, last_name, role_id, manager_id])
            console.log(addmore)
            if(addmore === `yes`){
                employeeoptions()
            }else{
                console.log('done')
            }
        })   
    }
})
}

           
           
        
  
