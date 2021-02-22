let canvas = document.getElementById('example'), //getting the canvas element
context = canvas.getContext('2d'); //attaching the context to that element


/*
Drawing a line

4 Canvas API methods used:
    1. beginPath() - tells the browser to prepare to draw a new path
    2. moveTo(x,y) - line's starting point
    3. lineTo(x,y) - line's end point
    4. stroke() - displays the line on the screen, default color is black
*/

context.beginPath();
context.moveTo(0,0)
context.lineTo(650,750);
context.stroke();


/*
Drawing a rectangle

4 Canvas API method/property used:
    1. .fillStyle - fill color
    2. fillRect(x,y,width,height) - sets co-ordinates and dimensions
*/

context.fillStyle = 'blue';
context.fillRect(50,50,200,100);

/*
Drawing text

4 Canvas API method/property used:
    1. .font - sets font, size and style of the text
    2. fillText() - tells the browser to draw some text
*/

context.font = '40pt monospace';
context.strokeText('Hello World!', 50, 50);
