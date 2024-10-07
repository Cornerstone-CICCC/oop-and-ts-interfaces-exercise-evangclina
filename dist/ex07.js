"use strict";
const logMessage = (input) => {
    if (typeof input === "string") {
        console.log(`Message: ${input}`);
    }
    else {
        console.log(`Code: ${input}`);
    }
};
logMessage("Hello");
// Expected Output: "Message: Hello"
logMessage(404);
// Expected Output: "Code: 404"
