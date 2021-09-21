function greetings() {
    console.log("Hello World");
};

const newGreetings = function () {
    console.log("Hello World");
};

//newGreetings();

function interact(anyFunctionReference) {
    //console.log(anyFunctionReference);
    anyFunctionReference();
    console.log("This code is shit: ", anyFunctionReference);
};

interact(newGreetings);
//interact();
//interact(1,2);

function poke() {
    console.log("Poked you");
};

interact(poke);

interact(() => console.log("yeah boi"));

// task create a function called InteractWithSomenone.. it should also send a name as the argument
// task call the passed funtion with the name

function interactWithSomenone(functionReference, name) {
    functionReference(name);
};

/*
function callBackLater(name) {
    console.log(`Hi, ${name}. I'm ready to help you.`);
};
*/

//const callBackLater = (name => {console.log(`Hi, ${name}. I'm ready to help you.`)});
const callBackLater = (name) => console.log(`Hi, ${name}. I'm ready to help you.`);

interactWithSomenone(callBackLater, "Rune");

// create a "helpWithHomeworkLater" function that helps a person later

function helpWithHomeworkLater(homework) {
    console.log("Doing something else");
    homework();
};

helpWithHomeworkLater(() => console.log("Does Node.js homework"));