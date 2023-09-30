## Introduction

This is an example of using Chart.js with React Typscript. The objectives of this exercise are:

- Exploring the Chart.js API with the help of typescript.
- Using Chart.js in an application, organizing code between Chart.js configuration and application business logic.

## About the Sample Chart

The chart displays the software license usages between a date range. Typically, the software will acquire a license from a license server on the network when being used and then return the license back to the license server when the software is closed. Licenses can have 3 states, being in-used, temporarily expired for the day, or currently available for check out. There is a limit number of licenses to be shared within the company. Tracking the software license usages will help the company manages its software cost more effectively.

The data for the chart are generated randomly between 2 dates. Depending on the date range, the interval between the data points could be monthly, daily, hourly, or by minute. The data can be regenerated dynamically to mimic calling a web service.