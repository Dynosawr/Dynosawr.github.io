<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
	<link rel="stylesheet" href="{{ site.baseurl }}/cube/cube.css">
  </head>
  <body>
<h1>Cube Simulator</h1>
<p>Good game for people who are stressed or bored.</p>
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
	<a onclick="turnLeft()">Left</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="turnRight()">Right</a> <br>
	<a onclick="flipCube()">Flip</a>
</p>
    <script>
var cubex = -22,	// initial rotation
cubey = -38,
cubez = 0;
function rotate(variableName, degrees) {
	window[variableName] = window[variableName] + degrees;
	rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
	segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
	$('#D3Cube').css({"transform":segs});
}
function turnRight() {
	rotate("cubey", 90);
}
function turnLeft() {
	rotate("cubey", -90);
}
function flipCube() {
	rotate("cubez", -180);
}
</script>
 </body>
</html>
