
var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]

// - Out put v1 -
console.log('Filter allowed age by ratings')
console.log('---')
// For each ratings (create new single item parameter, store the index number of ratings in this parameter) use this to create a funcction that...
ratings.forEach((rating, index) => {
    // creates a new variable that equals= filtering through the array or ages and creates a new array item parameter
    var isOldEnough = ages.filter(age => {
        // then only return me the ages that are >more than or equal= to the corresponding indx of the minAgeFor Rating array
      return age >= minAgeForRating[index];
      // New grab all the arrays that we just filtered through and map it
            //Not sure what this age => age is though....
    }).map(age => age);
     //lets print this out
    console.log("Allowed viewers of movies with ratings " + rating + " are " + isOldEnough.join());
    //console.log(isOldEnough); <<< this prints it in array format
});




console.log('')

// - Out put v2 -
console.log('Filter appropriate ratings by age')
console.log('---')
// For each age print out allowed ratings
ages.forEach(age => {
// Find out what ratings are allowed for this age =
    // Grab all the minimum age available filter through them
    var allowedRatings = minAgeForRating.filter(minimumAge => {
        // return the ages keep them in the minimumAge item for me
        return age >= minimumAge;
        // Then use the minimum Ages, and grab their index numbers
    }).map((minimumAge, minAgeIndex) => {
        //Map the minAgeIndex numbers to their coresponding ratings
        return ratings[minAgeIndex];
    })

    console.log( 'Age ' + age + ' is allowed to watch movies with the following ratings: ' + allowedRatings.join(', '));
});



//Test code for learning process... please ignore
// var ratingG = ages.filter(age => {
//     return age >= minAgeForRating[0];
// })
//
// var ratingPG = ages.filter(age => {
//     return age >= minAgeForRating[2];
// })
//
// var ratingM = ages.filter(age => {
//     return age >= minAgeForRating[2];
// })
//
// var ratingMA = ages.filter(age => {
//     return age >= minAgeForRating[3];
// })
//
// console.log(ratingG);
// console.log(ratingPG);
// console.log(ratingM);
// console.log(ratingMA);


//ages.forEach(age => {
    //var allowedAges = minAgeForRating.filter(minimumAge => {
        // return age >= minimumAge;
    //});

    // hmmmmm can i map them, instead of creating new variable?..................
    //var allowedRatings = allowedAges.map((minimumAge, minAgeIndex) => {
        //do I really need a separate variable for this?.....
        // var ratingsAllowed = ratings[minAgeIndex];
        //return ratingsAllowed;
        // test return ratings[minAgeIndex]
    //});

    // console.log(age + allowedRatings);
//});
