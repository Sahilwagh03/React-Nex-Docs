const fs = require('fs');
const path = require('path');

// Paths
const docsDir = path.resolve(__dirname, 'components');  // Directory of the components in docs repository
const packageDir = path.resolve(__dirname, '..', 'package');  // package repository
const registryPath = path.join(packageDir, 'component-registry.json');  // Path to the component-registry.json file in the package repository

// Read current registry
const registry = require(registryPath);

// Function to generate description
const generateDescription = (componentName, componentFiles) => {
  // Template for component description
  return `The ${componentName} component provides functionalities including ${componentFiles.join(', ').replace(/.js|.jsx/g, '')}.`;
};

// Function to update registry
const updateRegistry = (componentName, componentFiles) => {
  const baseURL = 'https://raw.githubusercontent.com/Sahilwagh03/React-Nex-Docs/main/components';
  if (!registry[componentName]) {
    registry[componentName] = {
      url: `${baseURL}/${componentName}/${componentName}.jsx`,
      version: "1.0.0",  // Update versioning as per your requirement
      description: generateDescription(componentName, componentFiles),
    };

    componentFiles.forEach(file => {
      if (file !== `${componentName}.jsx`) {
        registry[componentName][`${file.split('.')[0]}Files`] = `${baseURL}/${componentName}/${file}`;
      }
    });
  }
};

// Iterate over components in the documentation repository
fs.readdirSync(docsDir).forEach(componentDir => {
  const componentPath = path.join(docsDir, componentDir);
  if (fs.lstatSync(componentPath).isDirectory()) {
    const componentFiles = fs.readdirSync(componentPath);
    updateRegistry(componentDir, componentFiles);
  }
});

// Write updated registry
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
console.log('Registry updated successfully.');
