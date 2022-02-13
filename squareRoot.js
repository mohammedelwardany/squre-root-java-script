var squarenumber = prompt("pls enter number??");
if (Number(squarenumber)) {
    var sq = parseFloat(squarenumber);
    var sqrt = Math.sqrt(sq);
    alert("square root is = " + sqrt);
    location.reload();
} else {
    alert("no validate");
    location.reload();
}