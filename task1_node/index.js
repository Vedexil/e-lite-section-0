const text = "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."
const searchText = process.argv[2];
const answer = text.includes(searchText);
console.log(answer);