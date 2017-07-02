# Speed reader

This assignment tests your understanding of JavaScript and its interaction with HTML user interfaces.

[output](https://courses.cs.washington.edu/courses/cse154/16au/homework/3/output/out.png)

[Download video of interaction](https://courses.cs.washington.edu/courses/cse154/16au/homework/3/output/video.avi)



Everyone wishes they could read faster. One method for doing so is called Rapid Serial Visual Presentation (RSVP). RSVP is based on three observations:

1. Using your finger or some other pointing device to train your eyes and focus while reading increases speed.

2. Eliminating subvocalization, internally speaking words while reading them, can dramatically increase your
reading speed.

3. Speed reading skills rely on the reader¡¯s discipline to develop good reading habits, and it is easy for a reader
to learn "the wrong way" and thus never see the purported benefits of speed reading.

Computer programs are a great help in this area as they force readers to accurately do one and two while avoiding three. RSVP programs do this by presenting words to the reader in quick succession. Therefore, the reader is only able to focus on a single word at a time. And furthermore, the words appear at such a speed that the reader is unable to subvocalize like normal.

You will turn in the following files:
- speedreader.html, your web page
- speedreader.css, the style sheet for your web page
- speedreader.js, the JavaScript code for your web page



## Appearance Details

The page should have a title of SpeedReader centered horizontally. The overall page has a background color of #EAF6F6. The preferred font for all text on the page is Garamond in size 12pt. If that is not available it should use the default serif font available on the system.

Under the page's heading is a div with a width of 80% and a height of 100px, centered horizontally. It uses a 36pt bold font initially, has the system default monospace font and has a line height of 100px. It is surrounded by a solid 2px wide border in #8EBEBE with 5px curved corners. Its background color is #FFFFFF. Text inside it should be centered.

Below the div is a set of controls grouped into several field sets with a label on top of each. The labels should be bold, aligned left, have a bottom border of solid line 1px thick in #8EBEBE. They should be 100% wide and have 2px of space between the label and where the label¡¯s border would be on all sides.

The first three field sets should appear in one line, the last on the line below. To get the field sets to appear in a row horizontally, see textbook Chapter 4's section about Element Visibility and the display property. You should make sure that the tops of the field sets line up by setting their vertical alignment. The field sets are centered horizontally.

The last field set, that should appear on its own line, contains a text box. This text box should have 10 rows and 80columns. It should have a solid gray border 1px wide. It should have a background of #FFFFFF.

Some of the controls contain buttons. These buttons should have a white background and a solid gray border 1px wide. They should be 70px wide. When they are disabled their background color should be lightgray.

## Play Controls

Start: When clicked, word display animation begins. Each frame of animation is a single word. Separate words on white space (spaces, tabs and new lines). You can do this by using `var result = yourString.split(/[ \t\n]+/);`

Replace yourString with whatever you would like to split on white space.

If a word ends with a piece of punctuation (comma, period, exclamation point, question mark, semicolon or colon) the punctuation should be removed and that word should be displayed for twice the normal amount of time (hint: have a list of frames to display and add this frame twice in a row). You should only remove the last piece of punctuation if there are multiple in a row.

When animation starts, whatever text is currently in the text box is broken apart to produce frames of animation as described above. These are displayed in the div. By default, the word changes once every 171ms. When the animation reaches the last word, it should stop. (You should a JavaScript timer with the setInterval function.)

Stop: When clicked, halts any animation in progress. When animation is stopped, the div should become blank.

## Font Size

Contains three radio buttons labeled "Medium", "Big", and "Bigger". When one of the buttons (or the text next to it) is clicked, causing the box to become checked, it immediately sets the font size in the div. Initially Medium is selected and the text is 36pt in size. If Big is selected the text should be 48pt and if Bigger is selected it should be 60pt. If the animation is playing and one of these buttons is clicked, the font size changes immediately.

## Speed

A drop-down list of speeds. When one of the speeds is chosen, it immediately sets the speed in the div. The speed listed in the drop-down list, and the corresponding speed to set are - 50 wpm (500ms), 300 wpm (200ms), 350 wpm (171ms), 400 wpm (150ms), 450 wpm (133ms), 500 wpm (120ms).

If the animation is playing and a different speed is selected, the change should take effect immediately (the user shouldn't have to stop and restart the animation to see the change). Selecting the timing shouldn't cause the animation to start if it wasn't already started. It also shouldn't reset what frame is showing; it should just change the delay immediately. 350 wpm should initially be selected.

Note that when you write the code for changing the speed, it is easy to introduce redundancy. By setting a value attribute on each of the options in the drop-down list, you can avoid a long series of if/else statements.

## Control Enabling/Disabling:

Modify your GUI to disable elements that the user shouldn't be able to click at a given time. Initially and whenever animation is not in progress, the Stop button should be disabled. When an animation is in progress, the Start button and the text area should be disabled. The Size radio buttons and the Speed box should always be enabled. Enable or disable a control with its disabled property. 

## Development Strategy and Hints:

1. Write the basic HTML content including the proper UI controls.
2. Write your CSS code to achieve the proper layout.
3. Write a small amount of "starter" JS code and make sure that it runs. (For example, make it so that when the Start button is clicked, an alert box appears.)
4. Implement code to change the animation text and font sizes. Make it so that when an option is chosen in
the selection box, the proper text string appears in the div. Get the font size options working.
5. Implement a minimal Start behavior so that when Start is clicked, a single frame of animation is shown. Clicking Start multiple times would show successive frames of animation.
6. Use a JavaScript timer to implement the proper animation based on your previous code.
7. Get rid of punctuation and add longer delays at the ends of sentences and at commas.
