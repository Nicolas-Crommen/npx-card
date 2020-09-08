#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require("boxen");
const log = console.log;

const data = {
    line2: chalk.black("           • • • • •      • •    • • • • • •    • • • • • •"),
    line3: chalk.black("          • • • • • •    • •    • • • • • •    • • • • • •"),
    line4: chalk.black("         • • •   • •    • •    • •            • •     • •"),
    line5: chalk.black("        • • •   • •    • •    • • • • • •    • • • • • •"),
    line6: chalk.black("       • • •   • •    • •    • • • • • •    • • • • • •"),
    name: chalk.blue.bold("                        NICOLAS CROMMEN"),
    work: chalk.gray("Junior Developper at BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("Nicolas_Crommen"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~nicolas1576"),
    github: chalk.gray("https://github.com/") + chalk.green("Nicolas-Crommen"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("nicolas-crommen"),
    loves: chalk.blue("Jazz, ") + chalk.gray("Road Movies, ") + chalk.green("Code, ") + chalk.gray("and dreaming about the future"),
    labelWork: chalk.black.bold("       Work:"),
    labelTwitter: chalk.black.bold("    Twitter:"),
    labelNpm: chalk.black.bold("        npm:"),
    labelGitHub: chalk.black.bold("     GitHub:"),
    labelLinkedIn: chalk.black.bold("   LinkedIn:"),
    labelLoves: chalk.black.bold("      Loves:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

log(
    chalk.black(
        boxen(
            [
                `${data.line2}`,
                `${data.line3}`,
                `${data.line4}`,
                `${data.line5}`,
                `${data.line6}`,
                EMPTYLINE,
                `${data.name}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelTwitter} ${data.twitter}`,
                EMPTYLINE,
                `${data.labelLoves} ${data.loves}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 0,
                borderStyle: "round",
                backgroundColor: "white",
            },
        ),
    ),
);
