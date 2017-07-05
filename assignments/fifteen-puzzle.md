# Fifteen puzzles

[output](https://courses.cs.washington.edu/courses/cse154/16au/homework/4/output/out.png)

[hover](https://courses.cs.washington.edu/courses/cse154/16au/homework/4/output/out-hover.png)

[shuffle](https://courses.cs.washington.edu/courses/cse154/16au/homework/4/output/out-after-shuffle.png)


## Background Information:

The Fifteen Puzzle (also called the Sliding Puzzle) is a simple classic game consisting of a 4x4 grid of numbered squares with one square missing. The object of the game is to arrange the tiles into numerical order by repeatedly sliding a square that neighbors the missing square into its empty space.

You will write the CSS and JavaScript code for a page fifteen.html that plays the Fifteen Puzzle. You will also submit a background image of your own choosing, displayed underneath the tiles of the board. Choose any image you like, so long as its tiles can be distinguished on the board.

Turn in the following files:
• fifteen.js, the JavaScript code for your web page
• fifteen.css, the CSS styles for your web page
• background.jpg, your background image, suitable for a puzzle of size 400x400px
You will not submit any .html file, nor directly write any HTML code. We will provide you with the HTML code to use, which should not be modified.

## Appearance Details

All text on the page is displayed in a "cursive" font family, at a default font size of 14pt. Everything on the page is centered, including the top heading, paragraphs, the puzzle, the Shuffle button, and the W3C buttons at bottom.

In the center of the page are fifteen tiles representing the puzzle. The overall puzzle occupies 400x400 pixels on the page, horizontally centered. Each puzzle tile occupies a total of 100x100 pixels, but 5px on all four sides are occupied by a black border. This leaves 90x90 pixels of area inside each tile. The HTML file given to you does not contain the fifteen div elements to represent the puzzle pieces, and you are not supposed to modify the HTML file; so you will have to create the puzzle pieces and add them to the page yourself using the JavaScript DOM. Initially the page should appear with the puzzle in its properly arranged order like in the screenshot on the first page of this spec, with 1 at top-left, 4 at top-right, 13 at bottom-left, the empty square at bottom-right, and so on.

Each tile displays a number from 1 to 15, in a 40pt font. Each tile displays part of the image background.jpg, which you should put in the same folder as your page. Which part of the image is displayed by each tile is related to that tile's number. The "1" tile shows the top-left 100x100 portion of the image. The "2" tile shows the next 100x100px of the background that would be to the right of the part shown under the "1" tile, and so on.

1 2 3 4
5 6 7 8
9 10 11 12
13 14 15

Your background image appears on the puzzle pieces when you set it as the background-image of each piece. By adjusting the background-position of each div, you can show a different part of the background on each piece. One confusing thing about background-position is that the x/y values shift the background behind the element, not the element itself. The offsets are the negation of what you may expect. For example, if you wanted a 100x100px div to show the top-right corner of a 400x400px image, set its background-position property to - 300px 0px . 

Centered under the puzzle tiles is a Shuffle button that can be clicked to randomly rearrange the tiles of the puzzle. 

All other style elements on the page are subject to you.

## Playing the Game

When the mouse button is pressed on a puzzle square, if that square is next to the blank square, it is moved into the blank space. If the square does not neighbor the blank square, no action occurs. Similarly, if the mouse is pressed on the empty square or elsewhere on the page, no action occurs.

When the mouse hovers over a square that can be moved (neighbors the blank spot), its border and text color should become red. Also, the mouse cursor should change into a "hand" cursor pointing at the square (do this by setting the CSS cursor property to pointer.) Once the cursor is no longer hovering on the square, its appearance should revert to its original state. When the mouse cursor hovers over a square that cannot be moved, it should use the system's standard arrow cursor (set the cursor property to default) and it should not have the red text or borders or other effects.

The game is not required to take any particular action when the puzzle has been won. You can decide if you'd like to pop up an alert box congratulating the user or add any other optional behavior to handle this event.  (This is one of extra features.)

## Shuffle Algorithm

Centered under the puzzle tiles is a Shuffle button that can be clicked to randomly rearrange the tiles of the puzzle. When the Shuffle button is clicked, the puzzle tiles are rearranged into a random ordering so that the user has a challenging puzzle to solve.

The tiles must be rearranged into a solvable state. Some puzzle states are not solvable; for example, the puzzle cannot be solved if you swap only its 14 and 15 tiles. Therefore your algorithm for shuffling cannot simply move each tile to a completely random location. It must generate only solvable puzzle states.

We suggest that you generate a random valid solvable puzzle state by repeatedly choosing a random neighbor of the missing tile and sliding it onto the missing tile's space. Roughly 1000 such random movements should produce a well-shuffled board. 

Notice that on each pass of our algorithm, it is guaranteed that one square will move. Some students write an algorithm that randomly chooses any one of the 15 squares and tries to move it; but this is a poor way to shuffle because many of the 15 squares are not neighbors of the empty square. Therefore the loop must repeat many more times in order to shuffle the elements effectively, making it slow and causing the page to lag. This is not acceptable.

Your algorithm should be efficient; if it takes more than 1 second to run or performs a large number of tests and calls unnecessarily, you may lose points. For full credit, your shuffle should have a good random distribution and thoroughly rearrange the tiles and the blank position. You are not required to follow exactly the algorithm above, but if you don't, your algorithm must exhibit the desired properties described in this section.

Your shuffle algorithm will need to incorporate randomness. We suggest first implementing code to perform a single random move; that is, when Shuffle is clicked, randomly pick one square near the empty square and move it. Get it to do this once then work on doing it many times in a loop.

## Development Strategy:

Students generally find this to be a tricky assignment. Here is a suggested ordering for tackling the steps:
- Make the fifteen puzzle pieces appear in the correct positions without any background behind them.
- Make the correct parts of the background show through behind each tile.
- Write the code that moves a tile when it is clicked from its current location to the empty square's location. Don't worry initially about whether the clicked tile is "movable" (whether it is next to the empty square).
- Write code to determine whether a square can move or not (whether it neighbors the empty square).

## Hints

- Use absolute positioning to set the x/y locations of each puzzle piece. The overall puzzle area must use a
relative position in order for the x/y offsets of each piece to be relative to the puzzle area's location.
- You can convert a string to a number using parseInt. This also works for strings that start with a number and
end with non-numeric content. For example, parseInt("123four") returns 123.
- We suggest that you do not explicitly make a div to represent the empty square of the puzzle. Keep track of where it is, such as by row/column or by x/y position, but don't create an actual DOM element for it. We also suggest that you not store your puzzle squares in a 2-D array. This might seem like a good structure because of the 4x4 appearance of the grid, but it is bad style and will be difficult to keep it up to date as the squares move.
- Many students have redundant code because they don't create helper functions. You should write functions for common operations, such as moving a particular square, or for determining whether a given square currently can be moved. 

## Extra Features

Try some of these if you have more time

### End-of-game Notification
Add code to detect when the user has solved the puzzle. When the user moves all of the pieces of the puzzle into their proper places, your page should display a congratulatory message to the user. 
Note that the page initially appears with the page in a solved state, but this does not count as having solved the puzzle, and your congratulatory message should not be showing initially. But, for example, if the user moves a single tile from the sorted board out of place and then moves it back, this counts as "solving" the board.
If the "You won!" message is showing and the user makes a move or Shuffles, causing the puzzle to no longer be in its solved state, the message should disappear. The message should show only when the puzzle is in a solved state.

### Animations and/or Transitions
Instead of each tile immediately appearing in its new position, make them animate. You can do any sort of animation or other styling, as long as the game ends up in the proper state after a reasonable amount of time.
It can be tricky to implement animation yourself. You could do animation using a timer such as with the setInterval function. Or you could use a CSS3 transformation. One source of bugs is when the user tries to click pieces quickly before the previous move is done animating. Your puzzle should not have buggy behavior or  errors if the user tries to do this. It's fine to disable/ignore clicks on puzzle squares that occur during animation, so that it is not possible to make another click until the previous click is done animating.

### Game Timer
Keep track of the game time elapsed in seconds and the total number of moves, and when the puzzle has been solved, display them along with the best time and fewest total moves seen so far. 

### Different Puzzle Sizes
Place a control on the board to allow the game to be broken apart in other sizes besides 4x4, such as 3x3 or 8x8. It doesn't need to be possible to change the board size in the middle of a game; changing the size should reset the board back to an initial "solved" state for that board size. You can use a drop-down box of available board sizes.
The overall puzzle size should stay at 400x400. This means that each square's size must change if you change the number of rows and columns; for example, if it is a 5x5 game, each square is 80x80 rather than 100x100. Do not choose sizes which don't divide into 400, such as 6x6.

## Skeleton Code

```
<!DOCTYPE html>
<html>
	<!--
	You should not modify fifteen.html.  Your JS code should work with an
	unmodified version of this file.
	-->
	<head>
		<title>Fifteen Puzzle</title>

		<link href="https://webster.cs.washington.edu/images/fifteen/fifteen.gif"
		      type="image/gif" rel="shortcut icon" />

		<!-- your files that you will write -->
		<link href="fifteen.css" type="text/css" rel="stylesheet" />
		<script src="fifteen.js" type="text/javascript"></script>
	</head>

	<body>
		<h1>CSE 154 Fifteen Puzzle</h1>

		<p>
			The goal of the fifteen puzzle is to un-jumble its fifteen squares
			by repeatedly making moves that slide squares into the empty space.
			How quickly can you solve it?
		</p>
		
		<div id="puzzlearea">
		<!--
			this area holds the actual fifteen puzzle pieces
			add to it as you need to
		-->
		</div>

		<p id="controls">
			<button id="shufflebutton">Shuffle</button>
		</p>
		
		<div id="output"></div>
		
		<p>
			American puzzle author and mathematician Sam Loyd is often falsely
			credited with creating the puzzle; indeed, Loyd claimed from 1891
			until his death in 1911 that he invented it.
			The puzzle was actually created around 1874 by Noyes Palmer Chapman,
			a postmaster in Canastota, New York.
		</p>

	</body>
</html>

```


