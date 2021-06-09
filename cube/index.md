<html lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<title>CSS3 3D Cube</title>

</head>
<body>

<div id="wrapD3Cube">
	<div id="D3Cube" style="transform: rotateX(-22deg) rotateY(-38deg) rotateZ(-180deg) translateX(0px) translateY(0px) translateZ(0px);">
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

<style>
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}
body{line-height:1}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
nav ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:none}
a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}
ins{background-color:#ff9;color:#000;text-decoration:none}
mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}
del{text-decoration:line-through}
abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}
table{border-collapse:collapse;border-spacing:0}
hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}
input,select{vertical-align:middle}
a, a:visited {
    color: #0101d0;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    font-family: arial;
    line-height: 20px;
    display: inline-block;
    padding: 10px;
}
a:hover {
	color: #000;
}

#wrapD3Cube {
    width: 250px;
    height: 213px;
    margin: 20px auto;
    background-color: #EEE;
}
#D3Cube {
    width: 112px;
    height: 112px;
    top: 50px;
    transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    -moz-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    margin: auto;
    position: relative;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}
#D3Cube > div {
    position: absolute;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    width: 112px;
    height: 112px;
    float: left;
    overflow: hidden;
	opacity: 0.85;
}
#side1 {
    transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #FFF;
}
#side2 {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #ffaf1c;
}
#side3 {
    transform: translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: translateX(0px) translateY(0px) translateZ(56px);
	background-color: #58d568;
}
#side4 {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #ed3030;
}
#side5 {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #1c5ffe;
}
#side6 {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #f2f215;
}
</style>



</body></html>
