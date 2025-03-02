// global scope / window scope
var a = 1;

function println(value) {
    document.writeln(value + "<br>");
}

function tes() {
    // name conflict = mempunyai nama variable yang sama tapi beda scope
    var a = 2;
    println(a);
    println(window.a);
}

function tes2(a) {
    println(a);
}

tes();
tes2(4);

println(a);