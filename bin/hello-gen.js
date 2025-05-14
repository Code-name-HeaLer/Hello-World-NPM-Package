#!/usr/bin/env node

const { generateHelloWorld } = require("../lib/index");

// Get destination path if provided
const destinationPath = process.argv[2] || ".";

// Execute the generation function
generateHelloWorld(destinationPath)
  .then((result) => {
    console.log(result);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
