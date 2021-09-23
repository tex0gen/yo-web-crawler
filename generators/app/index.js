"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const HCCrawler = require("headless-chrome-crawler");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`URL Crawler for Redirects`));

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Project Name"
      },
      {
        type: "input",
        name: "site",
        message: "Site URL"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {}

  install() {
    const csvWriter = createCsvWriter({
      path: "./" + this.props.name + ".csv",
      header: [
        { id: "url", title: "URL" },
        { id: "status", title: "Status" }
      ],
      append: true
    });

    (async () => {
      const crawler = await HCCrawler.launch({
        onSuccess: result => {
          if (result.response.url) {
            let record = [
              { url: result.response.url, status: result.response.status }
            ];
            csvWriter
              .writeRecords(record) // Returns a promise
              .then(() => {
                console.log(chalk.green(result.response.url));
              });
          }
        }
      });
      // Queue a request
      await crawler.queue({
        url: this.props.site,
        maxDepth: 100,
        obeyRobotsTxt: false
      });
      await crawler.onIdle(); // Resolved when no queue is left
      await crawler.close(); // Close the crawler
    })();
  }
};
