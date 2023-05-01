const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};





// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

let [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

let [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken']
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig']
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let [red, orange, yellow, green, blue, indigo,violet]=['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet']

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let rainbow = {
  colors: ['red' , 'orange', 'yellow', 'green', 'blue', 'violet']
}

let [r, o, y, g, b,  v] = rainbow.colors

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
rainbow.colors.splice(5,0,'indigo')
let indg = rainbow.colors[5]

// Objects
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// 7. Use destructuring to assign all variables using the keys as the variable names
const nestedMuppet2 = {
  nestedName: 'name',
  nestedColor: 'color',
album: {
  theMuppetMovie: {
    song: 'song1'
  },
  nestedJob: 'job',
  nestedPartner: 'partner'
}
}
nestedMuppet2.nestedName = 'Miss Piggy'
nestedMuppet2.nestedColor = 'pink'
nestedMuppet2.album.song="Never Before, Never Again"
nestedMuppet2.nestedJob="Cast member of The Muppet Show"
nestedMuppet2.nestedPartner= "Kermit"

let muppetName = nestedMuppet2.nestedName
let color = nestedMuppet2.nestedColor
let song = nestedMuppet2.album.song
let job = nestedMuppet2.nestedJob
let partner = nestedMuppet2.nestedPartner
let song2 = nestedMuppet.album.theMuppetMovie.song2
let song4 = nestedMuppet.album.theMuppetMovie.song4
let nestedPartner = nestedMuppet.nestedPartner
let nestedJob= nestedMuppet.nestedJob