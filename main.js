#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDoArray = [];
while (true) {
    const operations = await inquirer.prompt([
        {
            name: "selectOptions",
            type: "list",
            choices: ["Add Task", "Delete Task", "View List", "Exit"],
            message: chalk.red(` What do you want to do?`),
        },
    ]);
    if (operations.selectOptions === "Add Task") {
        let toDoNew = await inquirer.prompt([
            {
                name: "toDoAdd",
                type: "input",
                message: `\n\t${chalk.yellow("=".repeat(40))}\n\n\t${chalk.green("\t===> TODO LIST PROGRAM <===")}\n\n\t${chalk.yellow("=".repeat(40))} \nEnter Task to Add`,
            },
        ]);
        toDoArray.push(toDoNew.toDoAdd);
        console.log(`\t${chalk.green("=".repeat(40))}`);
        console.log(`\t" ${chalk.blueBright(toDoNew.toDoAdd)} "${chalk.redBright("  <==== Successfully Added ")}`);
        console.log(`\t${chalk.green("=".repeat(40))}`);
    }
    else if (operations.selectOptions === "Delete Task") {
        let delToDo = await inquirer.prompt([
            {
                name: "toDel",
                type: "input",
                message: "Enter Index Number You Want to Delete",
            },
        ]);
        const indexToDelete = parseInt(delToDo.toDel);
        if (indexToDelete >= 0 && indexToDelete < toDoArray.length) {
            let delArray = toDoArray.splice(indexToDelete, 1);
            console.log(` "${chalk.green(delArray)}" Successfully Deleted`);
        }
        else {
            console.log(chalk.redBright("\nWrong Index. Please provide a valid index...\n"));
        }
    }
    else if (operations.selectOptions === "View List") {
        console.log(`${chalk.yellow("=".repeat(40))}`);
        console.log(`${chalk.yellowBright("\n\t '' To Do List '' \n")}`);
        for (let item of toDoArray) {
            console.log(`${chalk.yellow(`${toDoArray.indexOf(item)} : ${item}`)}`);
        }
        console.log(`${chalk.yellow("=".repeat(40))}\n`);
        if (toDoArray.length === 0) {
            console.log(chalk.redBright(".....No entries....."));
            console.log(chalk.redBright("=".repeat(40)));
        }
    }
    else if (operations.selectOptions === "Exit") {
        console.log(chalk.yellow("===== Thanks for Using ====="));
        console.log(`${chalk.greenBright("This Program Created By Muhammad Hamdan Bhatti")}`);
        break;
    }
}
