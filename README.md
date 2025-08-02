# stop-Watch
A clean, responsive stopwatch built using HTML, CSS, Bootstrap, and JavaScript. The app visually tracks elapsed time in minutes, seconds, and milliseconds, with intuitive controls to start, stop, and reset the timer.

HTML Overview
Navbar: Dark-themed header displaying the app title "STOP WATCH".

Main Layout: Bootstrap grid centers the stopwatch card elegantly on larger screens.

Time Display: Three <span> elements (#minutes, #seconds, #milliseconds) dynamically update as time passes.

Control Buttons: Three stylish, color-coded buttons for START, STOP, and RESET.

🎨 CSS Styling
Dark Mode UI: Background color #212121 gives a sleek vibe.

Buttons: Rounded corners (border-radius: 50px) with Bootstrap color classes (btn-success, btn-danger, btn-warning).

Card Effect: Soft shadow (box-shadow: 0 0 10px black) adds depth.

🧠 JavaScript Logic (10-stopwatch.js)
Time Tracking:

count increments every 10ms via setInterval().

Converts to minutes, seconds, and milliseconds using math calculations.

Pads numbers with .padStart() to maintain consistent formatting ("01", "09", etc).

Control Logic:

START: Activates the interval only if timerrunning is false.

STOP: Clears the interval and sets timerrunning to false.

RESET: Resets all display spans to "00" without affecting the timer state.
