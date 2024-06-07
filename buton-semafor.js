<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traffic Light Button</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .btn-red {
            background-color: red;
            color: white;
        }
        .btn-yellow {
            background-color: yellow;
            color: black;
        }
        .btn-green {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container text-center mt-5">
        <button id="trafficButton" class="btn btn-red">Press me</button>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Get the reference to the button
            var button = document.getElementById('trafficButton');
            // Array of color classes
            var colors = ['btn-red', 'btn-yellow', 'btn-green'];
            // Index to track the current color
            var currentColorIndex = 0;

            // Function to change the button color
            function changeColor() {
                // Remove the current color class
                button.classList.remove(colors[currentColorIndex]);
                // Update the color index
                currentColorIndex = (currentColorIndex + 1) % colors.length;
                // Add the new color class
                button.classList.add(colors[currentColorIndex]);
            }

            // Add click event listener to the button
            button.addEventListener('click', changeColor);

            // Change the color every 10 seconds
            setInterval(changeColor, 10000);
        });
    </script>
</body>
</html>