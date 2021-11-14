const bodyParser = require("body-parser")
const inquirer = require("inquirer")
const app = express()
const PORT = process.env.PORT || 3000;
const router =express.Router()
const fs = require("fs")

employeeoptions()
function employeeoptions(){
    inquirer.prompt({
        type:"list",
        message:"what would you like to do?",
        name:"role",
        choices:["add department", "add role", 'add employee']

    })
.then(function(employeeoptions){
    if (role === "add department") {
        inquirer.prompt([
            {type:'input',
            message:"which department:",
            name:'department'},

            {type:"list",
            message:"what would you like to do?",
            name:"role",
            choices:["add department", "add role", 'add employee']}
        ])
    }
}
            
        
