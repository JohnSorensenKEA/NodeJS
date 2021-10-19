
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            //reject("OH NO?"); //"return" på reject, når ikke videre
            throw new Error("shoot"); //Bryder try
            resolve("Everything went well");
        } catch {
            reject("OH NO!");
        }
    }, 4000);
})
.then(message => console.log("The message is:", message))
.catch(errorMessage => console.log("Error was:", errorMessage));
*/

/* Create a promise that resolves with "Noice" or rejects with "Damn" */

function nodeIsAMood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Noice");
            } catch {
                reject("Damn");
            }
        }, 3000);
    });
};

//console.log(nodeIsAMood()); //Output: Promise { <pending> }

/*
nodeIsAMood()
.then(console.log)
.catch(console.log);*/

/*
//async await, function call
async function asynchronousFunction() {
    const message = await nodeIsAMood();
    console.log(message);
};

asynchronousFunction();*/

//function called imedietly, faster (when testing)
//Doesn't handles reject -> needs try/catch
(async function asynchronousFunction() {
    try {
        const message = await nodeIsAMood();
        console.log(message);
    } catch {
        console.log("Heck");
    }
})();



