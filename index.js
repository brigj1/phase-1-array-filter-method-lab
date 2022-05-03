/*
We have an array of drivers with various information. We need to write functions using the filter() method so that PickMeUp Taxi service employees can easily query the data.
*/

function findMatching(names, searchString) {
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
    return names.filter(name => searchString.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(names, matchString) {
// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
    const matchMe = matchString.toLowerCase();
    return names.filter(name =>
        name.toLowerCase().substring(0, matchMe.length) === matchMe);
}

function matchName(nameObjs, matchString) {
// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
    return nameObjs.filter(nameObj => nameObj.name === matchString);
        //name.toLowerCase().substring(0, matchMe.length) === matchMe);

}