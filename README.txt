PLANNING NOTES

Here are my notes while in the planning stages for this program.

1. IMPORTS
	- Need readline-sync library for getting user input

2. DATA I HAVE, DATA I NEED
	- Already have doctor's names and numbers but need to transform data
	  "Last, First, xxx-555-xxxx" --> ["Last", "First", "xxx-555-xxxx"]
	- Need to ask user for choice of search type - IDEA: use numbers that will correspond to the index of the functions in a single array - except index 3 will be used only for returning all records
	- Create an array to hold references (variable names) of the three search functions with filters
	- If searching by name, will need a string (no numbers or spaces)
	- If searching by first letter of last name, will need single letter (no numbers or strings with a length of more than 1)
	- If searching by area code, will need a string (not number) that is exactly either "314", "618", or "636"
	- When pulling matching records for user, will need an empty array to collect results
	- When printing results, could start with an empty string and build it to use in one console.log - or maybe multiple console.log statements if not too many?
	- Will need to ask user if they want to do another search = maybe "Y" or "N"?

3. SMALL FUNCTIONS

	- Transform original data: 
		- doctors array is global and this function will only be used once specifically for that array, so no need to pass it in as a parameter
		- need new primary array to hold smaller arrays
		- use loop to transform one record at a time
		- return new array of records
		- call this function from within the main function before doing anything else

	- Get search type from user
		- use input.question and manually list search options by number, starting with zero to match index
		- fourth option should be for returning all results
		- validate to ensure input is 0-3 only
		- return the number entered by the user
		- will be called from the main function to serve as an index to choose the right search function (or search all if 3)

	- Search by name
		- require transformed array of doctor data to be passed in as an argument
		- declare an empty array to capture results
		- use input.question to get search term from user
		- validate to ensure it has no numbers or spaces
		- iterate through entire array of doctor data and check to see if user's search term is found in the first or last name
		- if there is a match, add record to results array
		- return results array
		- will be referenced in an array of search functions and then called from the main function if user chose this search type

	- Search by first letter of last name
		- require transformed array of doctor data to be passed in as an argument
		- declare an empty array to capture results
		- use input.question to get letter from user
		- validate to ensure it is not a number and has length of 1
		- iterate through entire array of doctor data and check to see if user's letter matches the first letter of the last name
		- if there is a match, add record to results array
		- return results array
		- will be referenced in an array of search functions and then called from the main function if user chose this search type

	- Search by area code
		- require transformed array of doctor data to be passed in as an argument
		- declare an empty array to capture results
		- use input.question to get area code from user
		- validate to ensure it is a string matching one of the three codes only
		- iterate through entire array of doctor data and check to see if user's selected area code matches the first three characters of the phone number
		- if there is a match, add record to results array
		- return results array
		- will be referenced in an array of search functions and then called from the main function if user chose this search type

	- Print formatted results to console
		- require results array to be passed in as an argument
		- maybe make some kind of header and footer to go before and after the results
		- could also give the number of results the way Google does
		- loop through results and pull first name and last name for first line and phone number for the second line, then make sure there is a line break between each record
		- have alternate message if no records were found
		- no return value - this function just prints something to the console
		- called from main function

4. MAIN FUNCTION
	- transform doctors data
	- print some sort of intro message
	- on loop until user is done:
		- ask for search type
		- get results - either return all records (index of 3) or use corresponding search method for indexes 0-2
		- print results
		- ask user if they want to search again
	- print some kind of exit message
5. RUN PROGRAM 
In terminal run this program by node index.js
