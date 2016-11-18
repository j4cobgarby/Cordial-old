// Some functions to create cards

var maxLength = 400;

var modal,
	btn,
	span

var memes =       "#ed856c";
var funny =       "#f1e292";
var animals =     "#83816c";
var interesting = "#96e08a";
var sad =         "#87cbd0";
var programming = "#50656b";
var cordial =     "#b984c6";
var tech =        "#c66481";
var other =       "#e4e3e9";

var ccols = {}; // category colours
ccols.memes = memes;
ccols.animals = animals;
ccols.funny = funny;
ccols.interesting = interesting;
ccols.sad = sad;
ccols.programming = programming;
ccols.cordial = cordial;
ccols.tech = tech;
ccols.other = other;

function modalInit() {
	modal = document.getElementById( 'toolongModal' );

	span = document.getElementsByClassName( 'close' );

	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function( event ) {
		modal.style.display = "none";
	}
}


function getRandomInt( min, max ) {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min; // Literally just a random integer n where min <= n <= max
}

function addCard( title, body, colour, whiteHead ) {
	if ( !title || !body ) {
		return;
	}

	var div = document.createElement( 'div' );
	div.className = "card";
	var header = document.createElement( 'h1' );
	header.style.backgroundColor = colour;
	header.className = "card";
	header.innerHTML = title;
	if ( whiteHead ) {
		header.style.color = "white";
	}
	div.appendChild( header );

	var p = document.createElement( 'p' );
	p.className = "card";
	p.innerHTML = body;
	div.appendChild( p )

	$( '.cards' )[ 0 ].insertBefore( div, $( '.cards' )[ 0 ].childNodes[ 0 ] );
}

function tooDark( c ) {
	var c = c.substring( 1 ); // get rid of preceeding #
	var rgb = parseInt( c, 16 ); // convert rrggbb to decimal
	var r = ( rgb >> 16 ) & 0xff; // extract red
	var g = ( rgb >> 8 ) & 0xff; // extract green
	var b = ( rgb >> 0 ) & 0xff; // extract blue

	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	if ( luma < 128 ) { // luma is basically kind of how light it is
		return true;
	}
	return false;
}

function cardFromInput() {
	var title = document.getElementById( 'topic' ).value;
	var message = document.getElementById( 'msg' ).value;
	var category = document.getElementById('cat-select').value;
	var colour = ccols[category];

	if ( message.length <= maxLength ) {
		addCard( title, message, colour, tooDark( colour ) );
		document.getElementById( 'topic' ).value = "";
		document.getElementById( 'msg' ).value = "";
	} else {
		modal.style.display = "block";
	}
}
