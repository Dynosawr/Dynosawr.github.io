<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
	<link rel="stylesheet" href="{{ site.baseurl }}/cube/cube.css">
  </head>
  <body>
    <div id="wrapD3Cube">
    <div id="D3Cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3"></div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>
</div>
<p style="text-align: center;">
    <a onclick="turnLeft()">Left</a>
    <a onclick="turnRight()">Right</a> <br />
    <a onclick="flipCube()">Flip</a>
</p>
    <script src="{{ site.baseurl }}/cube/cube.js"></script>
 </body>
</html>
