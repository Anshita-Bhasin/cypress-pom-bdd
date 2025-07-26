const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "cypress/reports/cucumber-htmlreport",
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "Local test machine",
        platform: {
            name: "linux",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Cypress + BDD + POM project" },
            { label: "Release", value: "5.0.1" },
            { label: "Cycle", value: "test1.0" },
            { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
            { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
        ],
    },
});
