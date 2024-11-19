const fibonacci = function(memberNumber) {

let fibArray = [1, 1, 2, 3, 5, 8];

for (i = 0; i <= 25; i++) {
    const newMember = fibArray.at(-2) + fibArray.at(-1);
    fibArray.push(newMember);
};

const number = Number(memberNumber);

if (number < 0) return "OOPS";
if (number === 0) return 0;

const member = fibArray.at((number - 1))
return member;

};

fibonacci();

 
//Do not edit below this line
module.exports = fibonacci;
