
// Decimal to Binary
function toBinary(d){
    var t = d, bin = '';
    while(t>0){
        var r = t%2;
        t = Math.floor(t/2);
        bin += String(r);
    }
    bin = bin.split('').reverse().join('');
    return Number(bin);
}

// Binary to Decimal
function toDecimal(b){
    var dec=0;
    var t=Number(b), i=0;
    while(t>0){
        var x = Math.floor(t%10)*(Math.pow(2,i));
        dec+=x;
        t = Math.floor(t/10);
        i++;
    }
    return dec;
}