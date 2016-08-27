var streetName = ['Batman', 'Homer', 'Alice', 'Dino', 'Kenny', 'Clark', 'Harley Quin', 'Toatoa', 'Wolverene', 'Peter Pan', 'Robin']
var streetType = ['St', 'Ave', 'Blv', 'Alley', 'Drive', 'Run', 'Lane', 'Way', 'Walk', 'Cave', 'Point']
var city = ['Neverland', 'Gotham', 'Wonderland', 'Kings landing', 'Metropolis', 'Bedrock', 'South Park', 'Silent Hill', 'Arkham', 'Whoville', 'Emerald City']
var stateAbbrev = ['NSW', 'ACT', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT']

var streetNumber = Math.floor(Math.random() * 99)
                  // Why must the max and min be in paren, then plus the min?
var postCode = Math.floor(Math.random() * (7999 - 800) + 800)

// why square brackets to math random this?
var randomStreet = streetName[Math.floor(Math.random() * 10)]
var randomType = streetType[Math.floor(Math.random() * 10)]
var randomCity = city[Math.floor(Math.random() * 10)]
var correspondingState = stateAbbrev

if (postCode <= 999) {
  correspondingState = stateAbbrev[7]
} else if (postCode <= 7999 && postCode >= 7000) {
  correspondingState = stateAbbrev[6]
} else if (postCode <= 6999 && postCode >= 6000) {
  correspondingState = stateAbbrev[5]
} else if (postCode <= 5999 && postCode >= 5000) {
  correspondingState = stateAbbrev[4]
} else if (postCode <= 4999 && postCode >= 4000) {
  correspondingState = stateAbbrev[3]
} else if (postCode <= 3999 && postCode >= 3000) {
  correspondingState = stateAbbrev[2]
} else if (postCode <= 2920 && postCode >= 2600) {
  correspondingState = stateAbbrev[1]
} else {
  correspondingState = stateAbbrev[0]
}

console.log(streetNumber + ' ' + randomStreet + ' ' + randomType + ', ' + randomCity + ', ' + correspondingState + ' ' + postCode)
