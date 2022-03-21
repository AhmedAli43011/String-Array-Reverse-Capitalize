const string = "my car was broken last week now we need";
const str = string.split(' ');
const rev = str.reverse()
for (var i = 0; i < rev.length; i++) {
    rev[i] = rev[i].charAt(0).toUpperCase() + rev[i].slice(1);

}
const str2 = rev.join(" ")
console.log(str2)


