// Picture 1
let star = "";
for (let x = 0; x < 11; x++) {
    for (let y = 0 ; y < x; y++) {
        star += " *";
    }
    star += "\n";
}
console.log(star);

//Picture 2
let startwo = ""; 
for (x = 0; x <= 10; x++) {
    for ( t = 0; t < 10 - x; t++) {
        startwo += "  ";
    }
    for (y = 0 ; y < x; y++)  {
        startwo += " *";
    };
    startwo += "\n";
};
console.log(startwo);

//Picture 3
let starthree = "";
for (let i = 0; i < 10; i++) {
    for (let j = i; j < 10; j++) {
        starthree += " *";
    }
    starthree += "\n";
}
console.log(starthree);


// Picture 4
let starfour = "";
for (i = 0; i < 10; i++) {
    for (k = 0; k < i; k++) {
        starfour += "  ";
    }
    for (j = i; j < 10; j++) {
        starfour += " *";
    }
    starfour += "\n";
}
console.log(starfour);



// Picture 5
let starfive = ""; 
for (x = 0; x <= 10; x++) {
    for ( t = 0; t < 10 - x; t++) {
        starfive += " ";
    }
    for (y = 0 ; y < x; y++)  {
        starfive += " *";
    };
    starfive += "\n";
};
console.log(starfive);

//Picture 6
let starsix = ""; 
for ( x = 1; x <= 3; x++) {
    for (t = 0; t < 10 - x; t++) {
        starsix += " ";
    }
    for (y = 0 ; y < x; y++)  {
        starsix += " *";
    };
     starsix += "\n";
};
for ( x = 2; x <= 4; x++) {
    for (t = 0; t < 10 - x; t++) {
        starsix += " ";
    }
    for (y = 0 ; y < x; y++)  {
        starsix += " *";
    };
     starsix += "\n";
};
for (x = 3; x <= 5; x++) {
    for (t = 0; t < 10 - x; t++) {
        starsix += " ";
    }
    for (y = 0 ; y < x; y++)  {
        starsix += " *";
    };
     starsix += "\n";
};
console.log(starsix);