const fs = require("fs");
const path = require("path");

/**
 * Generates a hello.js file with Hello World program
 * @param {string} destinationPath - Directory where the file should be created
 * @returns {Promise<string>} - Success message
 */
function generateHelloWorld(destinationPath) {
  return new Promise((resolve, reject) => {
    try {
      // Ensure destination path exists
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
      }

      // Create file path
      const filePath = path.join(destinationPath, "hello.js");

      // Hello World content
      const content = `// Hello World Program
console.log('Hello, World!');

// Run this program with: node hello.js
`;

      // Check if file already exists
      if (fs.existsSync(filePath)) {
        return reject(new Error(`File already exists: ${filePath}`));
      }

      // Write the file
      fs.writeFileSync(filePath, content);

      resolve(`✅ Success! Hello World program created at: ${filePath}`);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  generateHelloWorld,
};
