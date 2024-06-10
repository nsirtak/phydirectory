/*****************************************/
/******* GRADED ASSIGNMENT #2 PREP *******/
/********** PHYSICIAN DIRECTORY **********/
/************ by Carrie Jones ************/
/*****************************************/

/*  
  This is the STARTER code. 
	Feel free to fork it to your own account and practice!

 	Tutorial Recording:
		https://youtu.be/tbLMj7h9Ghk

 	Guide:
		https://tinyurl.com/xt5ux8h6

	Solution:
		https://replit.com/@CarolineRose/PhysicianDirectory

  Find more examples and practice problems here: 
 		https://carolista.github.io/student-resources/
*/

/*
	The goal of this exercise is to learn how to break down a program into small, achievable parts and think through what order things should be in and how it should all fit together. 

	See instructions.txt for requirements, and do your planning in planning-notes.txt.
*/


/**** IMPORTS ****/

// TODO: import readline-sync library
const input = require('readline-sync');

/**** DATA ****/

// GIVEN: Doctors (firstName, lastName, phoneNumber)
let doctors = [
	'Bailey, Miranda, 314-555-3144',
	'Kimble, Richard, 618-555-1636',
	'Scully, Dana, 314-555-2975',
	'Mallard, Donald "Ducky", 314-555-8461',
	'Crane, Frasier, 618-555-3839',
	'Grissom, Gil, 314-555-1163',
	'Saroyan, Camille, 636-555-4557',
	'Yang, Cristina, 618-555-0073',
	'Dorian, J.D., 636-555-6392',
	'Ellingham, Martin, 636-555-9037',
	'House, Gregory, 636-555-2873',
	'Lahiri, Mindy, 314-555-1057',
	'Ramoray, Drake, 636-555-8573',
	'Bashir, Julian, 636-555-3948',
	'Sternan, Lilith, 314-555-1816',
	'Cottle, Sherman, 314-555-2930',
	'Brennan, Temperance, 636-555-5928',
	'Shephard, Jack, 618-555-6042',
	'Watson, John, 314-555-2085',
	'Crusher, Beverly, 314-555-9482',
	'Cavanaugh, Jordan, 618-555-3948',
	'Blake, Lucien, 314-555-2832',
	'Saunders, Claire, 636-555-9709',
	'Howser, Doogie, 314-555-7673',
	'Lockhart, Abby, 636-555-3928',
	'Ross, Doug, 314-555-3455',
	'Pierce, Benjamin "Hawkeye", 314-555-1886',
	'Corday, Elizabeth, 314-555-4995',
	'Rasgotra, Neela, 314-555-4816',
	'Doyle, Maggie, 314-555-7573',
	'Carter, John, 314-555-9872',
	'Greene, Mark, 636-555-8788',
	'Tam, Simon, 618-555-2834',
	'Grey, Meredith, 314-555-1195',
	'Avery, Jackson, 636-555-0228',
	'Shepherd, Derek, 314-555-7027',
	'Torres, Callie, 618-555-6639',
	'Wilson, James, 314-555-6837',
	'Cuddy, Lisa, 314-555-5756',
	'Foreman, Eric, 618-555-9446',
	'Cameron, Allison, 636-555-1990',
	'Winchester III, Charles Emerson, 314-555-7736',
	'Hunnicutt, B.J., 314-555-5028',
	'Potter, Sherman, 636-555-1773',
	'Wade, Loretta, 314-555-9282',
	'Bennett, Sam, 314-555-0030',
	'Lawson, Hank, 314-555-7175',
	'Chandler, Phillip, 618-555-9947',
	'Turk, Christopher, 314-555-3386',
	'McCoy, Leonard, 314-555-6962',
	'Bartlet, Abigail, 636-555-4883'
]

// TODO: Collect 3 search functions in an array (corresponding to types)
let searchFunctions = [searchByName, searchByLetter, searchByAreaCode];


/**** MINOR FUNCTIONS ****/

// TODO: Transform strings to subarrays of 3 strings
function createNewDoctorList() {
	let newList = [];
	doctors.sort(); // put in alphabetical order by last name first
	for (let i=0; i < doctors.length; i++) {
		let subArray = doctors[i].split(', '); // string to array
		newList.push(subArray);
	}
	return newList;
}


// TODO: Ask user for type of search & validate response
function getSearchTypeIndex() {
	// Create string of options
	let options = "\n\t0 - Search by name \n\t1 - Search by first letter of last name \n\t2 - Search by area code \n\t3 - Display all";
	// Ask user to pick a search type
	let selectedSearchType = input.question(`\nWhat kind of search would you like? ${options}\n`);
	// Validate user's response
	while (selectedSearchType < 0 || selectedSearchType >= 4 || isNaN(selectedSearchType)) {
		selectedSearchType = input.question(`\nPlease enter a valid number. What kind of search would you like? ${options}`);
	}
	return selectedSearchType; // we will use this index
}


// TODO: Filter listings by name (check both first and last names for keyword)

function searchByName(doctorArrays) {
	let results = [];
	// Ask user for all or part of a name
	let searchTerm = input.question("\nPlease enter all or part of a first OR last name: \n");
	// Validate for numbers or spaces
	while (searchTerm.includes(" ") || ! isNaN(searchTerm)) {
		searchTerm = input.question("\nNo numbers or spaces - please enter all or part of a first OR last name: \n");
	}
	// Build results
	for (let i=0; i < doctorArrays.length; i++) {
		if (doctorArrays[i][0].toLowerCase().includes(searchTerm.toLowerCase()) || doctorArrays[i][1].toLowerCase().includes(searchTerm.toLowerCase())) {
			results.push(doctorArrays[i]);
		}
	}
	return results;
}


// TODO: Filter listings by first letter of last name
function searchByLetter(doctorArrays) {
	let results = [];
	// Ask user for a letter
	let letter = input.question("\nWhich letter of the alphabet would you like to search last names by?\n");
	// Validate user response to ensure it is just one letter
	while (! isNaN(letter) || letter.length > 1) {
		letter = input.question("\nPlease enter a letter of the alphabet:\n");
	}
	// Build results
	for (let i=0; i < doctorArrays.length; i++) {
		if (doctorArrays[i][0][0] === letter.toUpperCase()) {
			results.push(doctorArrays[i]);
		}
	}
	return results;
}

// TODO: Filter listings by area code
function searchByAreaCode(doctorArrays) {
	let results = [];
	// Ask user for an area code
	let areaCode = input.question("\nWhich area code would you like to search? Choices are 314, 618, and 636:\n");
	// Validate user response
	while (areaCode !== '314' && areaCode !== '618' && areaCode !== '636') {
		selectedSearchType = input.question(`\nPlease enter a valid area code. Choices are 314, 618, and 636:\n`);
	}
	// Build results
	for (let i=0; i < doctorArrays.length; i++) {
		if (doctorArrays[i][2].slice(0,3) === areaCode) {
			results.push(doctorArrays[i]);
		}
	}
	return results;
}


// TODO: Format and print results
function printResults(results) {
	// Handle cases where results array has no records
	if (results.length === 0) {
		console.log("\nSorry, no results found. \n");
	} else {
		console.log("\nRESULTS *******************************\n");
		console.log(`${results.length} results found:\n`)
		for (let i=0; i < results.length; i++) {
			console.log(`Dr. ${results[i][1]} ${results[i][0]}`);
			console.log(`${results[i][2]}\n`);
		}
		console.log("***************************************");
	}
}

/**** MAIN FUNCTION ****/

// TODO: Put everything together in a single function
function runProgram() {
	// Transform data
	let newDoctorArray = createNewDoctorList(doctors);
	// Intro program
	console.log("Welcome to the Directory of Physicians for the St. Louis Metropolitan Area!");
	let keepSearching = true; // default for looping
	// Start loop
	while (keepSearching) {
		// Find out which search type the user wants
		let index = getSearchTypeIndex();
		let results; // declare only
		// Conduct corresponding search
		if (index === '3') {
			// If index 3, just get all listings
			results = newDoctorArray.slice(); // .slice() makes a copy 
		} else {
			// If index 0-2, use corresponding search function
			results = searchFunctions[index](newDoctorArray);
		}
		// Display results
		printResults(results);
		// Ask if user wants to search again
		if (input.question("\nAnother search? (Y/N) ").toUpperCase() !== "Y") {
			keepSearching = false;
		}		
	}
    // End program
	console.log("\nThank you for using our directory!\n")
}


// TODO: Call main function so that program will run
        runProgram();
