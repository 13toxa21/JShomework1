document.getElementById("btn1").onclick = function() {
  window.location.href = "https://www.tut.by/";
}

var editQuad = document.getElementById("center");

function newColor(){
    if(editQuad.style.backgroundColor == "red"){
     editQuad.style.backgroundColor = "green";
    }else{
        editQuad.style.backgroundColor = "red"
    }
}

var edit = document.getElementById("color");

function newColor1(){
    if(edit.style.backgroundColor == "green"){
     edit.style.backgroundColor = "red";
    }else{
        edit.style.backgroundColor = "green"
    }
}

var elem = document.getElementById("center");

 function del(){
	elem.parentNode.removeChild(elem);
}

var sect = document.getElementById('color');

var oneDiv = document.createElement('div');

oneDiv.style.width = '100px';
oneDiv.style.height = '100px';
oneDiv.style.backgroundColor = 'yellow';

var twoDiv = document.createElement('div');
twoDiv.style.width = '100px';
twoDiv.style.height = '100px';
twoDiv.style.backgroundColor = 'yellow';

var threeDiv = document.createElement('div');
threeDiv.style.width = '100px';
threeDiv.style.height = '100px';
threeDiv.style.backgroundColor = 'yellow';

function dob(){
    sect.appendChild(oneDiv);
}
function dob1(){
    sect.appendChild(twoDiv);
}
function dob2(){
    sect.appendChild(threeDiv);
}



var term = {
    Canada: 10,
    Spain: 25,
    USA: 11,
    Belarus: 15,
    Russia: 16,
    Italia: 28,
}
Object.defineProperty(term, 'averageTerm',{
	enumerable: false,
	get() {
		var r = 0
		var k = Object.keys(this)
		for(var key in this){
			r+=this[key]
		}
		return r / k.length
	}
})
console.log(term.averageTerm)

    
    function maxterm(Object){
        var max = 0;
        for(var key in Object){
            if(Object[key] > max){
                max = Object[key]
            }
        }
        return max;
    }

    var textmax = maxterm(term);
    alert("Max: " + textmax);

 