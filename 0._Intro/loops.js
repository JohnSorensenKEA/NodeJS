const favoriteThings = ["Cleo", 420, "🐱‍👤", true, "\u2606"];

//console.log(favoriteThings);

//favoriteThings.forEach((favoriteThing, index, array) => console.log(favoriteThing, index, array));
//favoriteThings.forEach((favoriteThing) => console.log(favoriteThing));

//B: Pure functions: Side effect. 
const favoriteThingsWithCommentary = [];
favoriteThings.forEach(favoriteThing => favoriteThingsWithCommentary.push(`Ooh i like ${favoriteThing}`));

const subjectiveFavoriteThings = favoriteThings.map(favoriteThing => `Ooh i like ${favoriteThing}`);

//A
//favoriteThings.forEach((favoriteThing, index, array) => {
//    array[index] = "Ooh i like " + favoriteThing;
//});


//favoriteThings.forEach((favoriteThing) => console.log(favoriteThing));

//console.log(favoriteThings.indexOf("🐱‍👤"));

const longFavoriteThings = favoriteThings.filter(favoriteThing => favoriteThing.length > 3);
console.log(longFavoriteThings);

