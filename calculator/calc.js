/*
 * Implement all your JavaScript in this file!
 */
var operationMade = false;

function insrt(num) {
	let i = 0;
	let str = document.getElementById("display").value;

	if(operationMade){
		clearInput();
		operationMade = false;
	}

	//if the think to insert is an operation implement it without having to delete anything
	if(num.toString() == '+' || num.toString() == '-' || num.toString() == '*' || num.toString() == '/'){
		for(;  i < str.length; i++){
			if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/'){
				calcResult_2();
			}
		}
	}

	document.getElementById("display").value += num.toString();
	
}

function clearInput(){
	document.getElementById("display").value = '';
}

function calcResult(){
	let str = document.getElementById("display").value;
	let i = 0;
	//in case an operation is not being used
	let break_value = 0;

	//if there is an operation and after that another operation without pressing equals do this
	operationMade = true;

	//check if there is an operation in the string or only a number
	for (; i < str.length; i++) {
		if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/'){
			break_value = 1;
			break;
		}
	}

	//if there are two operations one after the other do the second one 
	if(str[i+1] == '+' || str[i+1] == '-' || str[i+1] == '*' || str[i+1] == '/'){
		let string = str.substr(0, i);
		string += str.substr(i+1, str.length-2);
		str = string;
		console.log(str);
	}

	//break the string into parts and do the operations between the strings
	if(break_value == 1){
		let string1 = str.substr(0, i);
		let string2 = str.substr(i+1, str.length - 1);
		let sum;

		if(str[i] == '+'){
			sum = Number(string1) + Number(string2);
		}
		else if(str[i] == '-'){
			sum = Number(string1) - Number(string2);
		}
		else if(str[i] == '/'){
			sum = Number(string1) / Number(string2);
		}
		else if(str[i] == '*'){
			sum = Number(string1) * Number(string2);
		}

		document.getElementById("display").value = sum;
	}
}

function calcResult_2(){
	let str = document.getElementById("display").value;
	let i = 0;
	//in case an operation is not being used
	let break_value = 0;

	for (; i < str.length; i++) {
		if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/'){
			break_value = 1;
			break;
		}
	}

	if(str[i+1] == '+' || str[i+1] == '-' || str[i+1] == '*' || str[i+1] == '/'){
		let string = str.substr(0, i);
		string += str.substr(i+1, str.length-2);
		str = string;
		console.log(str);
	}

	if(break_value == 1){
		let string1 = str.substr(0, i);
		let string2 = str.substr(i+1, str.length - 1);
		let sum;

		if(str[i] == '+'){
			sum = Number(string1) + Number(string2);
		}
		else if(str[i] == '-'){
			sum = Number(string1) - Number(string2);
		}
		else if(str[i] == '/'){
			sum = Number(string1) / Number(string2);
		}
		else if(str[i] == '*'){
			sum = Number(string1) * Number(string2);
		}

		document.getElementById("display").value = sum;
	}
}