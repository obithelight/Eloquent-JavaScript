/*
1. Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
let tag = "#"
	while(tag.length <= 7){
		console.log(tag)
		tag = tag + "#"
	}

/*
2. FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzBuzz(){
	for(let i = 1; i <= 100; i++){
		if((i % 3 == 0) && (i % 5 == 0)){
			console.log("fizzBuzz")
		}else if(i % 3 == 0){
			console.log("fizz")
		}else if(i % 5 == 0){
			console.log("buzz")
		}else{
			console.log(i)
		}
	}
}
fizzBuzz()

/*
3. Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

let size = 8 
let board = ""

for(let row = 1; row <= size; row++){
	for(let column = 1; column <= size; column++){
		if((row + column) % 2 == 0){
			board += " "

		}else{
			board += "#"
		}

	}
	board += "\n"
}
console.log(board)