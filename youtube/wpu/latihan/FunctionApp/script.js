function println(value) {
	document.writeln(value + "<br>");
}

function tambah() {
	hasil = 0;

	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	};

	return hasil;
}

function kali(a, b) {
	return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));

println(hasil);

println("Arguments");
println(tambah(1,2,3,4,5,6,7,8));