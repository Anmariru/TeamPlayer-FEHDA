// Our Team
// Team members
// Favorite movies
// Seniority
// Add new keys and values and remove a few one

let ourTeam = {
	name: "FEDHA",
	members: [
		{
			name: "Franzi",
			birthday: {
				year: 1994,
				month: 5,
				day: 8,
			},
			location: {		// TODO
				city: "Vienna",
				country: "Austria",
			},
			codingLevel: {		// TODO
				level: 4,
				seniority: "junior",
			},
			favorites: {
				favBooks: [
					{
						title: "Eragon - Das Vermächtnis des Drachenreiters",
						author: "Christopher Paolini",
						year: 2003,
						isNewerThan2000: true,
						characters: ["Eragon", "Saphira", "Arya", "Brom"],
						review: "", // TODO
					},
					{
						title: "Tintenherz",
						author: "Cornelia Funke",
						year: 2004,
						isNewerThan: true,
						characters: ["Meggie", "Mo", "Elinor", "Gwin"],
						review: "", // TODO
					},
				],
				favMovies: [
					{
						title: "My Neighbor Totoro",
						year: 1988,
						rating: 8.1,
						// TODO description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
						directors: ["Hayao Miyazaki"],
						writers: ["Hayao Miyazaki"],
						stars: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
						genres: ["Fantasy", "Comedy", "Family"],
					},
					{
						title: "Naruto",
						year: 2002,
						rating: 8.4,
						// TODO description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
						directors: ["Osamu Kobayashi"],
						writers: ["Masashi Kishimoto", "Chie Nakamura"],
						stars: ["Junko Takeuchi", "Chie Nakamura", "Kazuhiko Inoue"],
						genres: ["Adventure", "Animation	", "Action"],
					},
					{
						title: "The dark Knight rises",
						year: 2012,
						rating: 8.4,
						// TODO description: "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
						directors: ["Christopher Nolan"],
						writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
						stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
						genres: ["Action", "Crime", "Drama"],
					},
					{
						title: "Inglorious Basterds",
						year: 2009,
						rating: 8.4,
						// TODO description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
						directors: ["Quentin Tarantino"],
						writers: ["Quentin Tarantino"],
						stars: ["Brad Pitt", "Diane Kruger", "Melanie Laurent"],
						genres: ["Action", "Drama", "War"],
					},
				],
				favMusic: [		// TODO
					{
						artist: "AC/DC",
						title: "Back in Black",
						year: 1980,
						genres: ["hard rock"],
						sale: 50000000,
					},
				],
			}
		},
		{
			name: "Eroll",
			birthday: {
				year: 1998,
				month: 0,
				day: 0,
			},
			location: {
				city: "Vienna",
				country: "Austria",
			},
			codingLevel: {
				level: 2,
				seniority: "junior",
			},
		favorites: {
			favBooks: [
				{
					title: "",
					author: "",
					year: 1,
					characters: ["", ""],
					review: "",
				},
				{
					title: "",
					author: "",
					year: 2,
					characters: ["", ""],
					review: "I like the song because it's very energetic",
				},
			],
			favMovies: [
				{
					title: "",
					year: 2,
					rating: 7.6,
					// TODO discription: "",
					review: "",
					directors: [""],
					writers: ["", "", ""],
					stars: ["", "", ""],
					genres: ["Fantasy", "Horror"],
				},
				{
					title: "",
					year: 1,
					rating: 6.9,
					// TODO discription: "",
					review: "",
					directors: [""],
					writers: ["", "", ""],
					stars: ["H", "", ""],
					genres: ["Action", "Comic"],
				},
				{
					title: " ",
					year: 2,
					rating: 7.3,
					// TODO discription: "",
					review: "",
					directors: [""],
					writers: ["", "", ""],
					stars: ["", "", ""],
					genres: ["Action"],
				},
				{
					title: " ",
					year: 2010,
					rating: 7.8,
					// TODO discription: "",
					review: "",
					directors: [""],
					writers: 8.9,
					stars: ["", "", ""],
					genres: ["Drama", "Romance"],
				},
			],
			favMusic: [		// TODO
					{
						artist: "Fleetwood Mac",
						title: "Rumours",
						year: 1977,
						genres: ["soft rock"],
						sale: 40000000,
					},
				],
		},
			name: "Heidelinde",
			birthday: {
				year: 1980,
				month: 11,
				day: 26,
			},
			location: {
				city: "Graz", // TODO
				country: "Austria", // TODO
			},
			codingLevel: {
				level: 1, // TODO
				seniority: "junior",	// TODO
			},
			favorites: {
				favBooks: [
					{
						title: "Stoizismus",
						author: "Jonas Salzgeber",
						year: 2022,
						//isNewerThan2000: true,
						characters: ["Luise", "Tom", "Jonas"],
						review: "", // TODO
					},
					{
						title: "Island Life My Australia",
						author: "Tim Winton",
						year: 2016,
						//isNewerThan2000: false,
						characters: ["Richard", "Tony", "William"],
						review: "", // TODO
					}
				],
				favMovies: [
					{
						title: "The Whole Nine Yards",
						year: 2000,
						rating: 6.7,
						// TODO discription: "Nicholas Oseransky, a dentist living in a Montreal suburb, is hated by his wife Sophie and his mother-in-law, and his father-in-law has saddled him with a mountain of debt. His only friend is his receptionist Jill, who urges him to leave his wife.",
						director: ["Jonathan Lynn"],
						writer: ["Mitchell Kapner"],
						stars: ["Bruce Willis", "Matthew Perry", "Amanda Peet", "Michael Clarke Duncan", "Natasha Henstridge", "Rosanna Arquette", "Kevin Pollak", "Harland Williams"],
						genres: ["Comedy", "Crime Black Comedy", "Romance", "Gangster Film"]
					},
					{
						title: "Die Hard",
						year: 1988,
						rating: 8.2,
						// TODOdiscription: "Die Hard is a 1988 American action film directed by John McTiernan. It is about a police officer who single-handedly takes up the fight against gangsters who have occupied a high-rise building. It stars Bruce Willis and Alan Rickman in the leading roles. The film is the adaptation of the 1979 book Nothing Lasts Forever, written by Roderick Thorp, which is a sequel to the 1966 novel The Detective. After the great success of the film, four sequels were produced, the last of which, Die Hard - A Good Day to Die, was released in February 2013.",
						director: ["John McTiernan "],
						writers: ["Jeb Stuart", "Steven E. de Souza"],
						stars: ["Sylvester Stallone", "Richard Gere", "Clint Eastwood", "Harrison Ford", "Burt Reynolds", "Nick Nolte", "Mel Gibson",],
						genres: ["action"],
					},
					{
						title: "COCO- more alive than life",
						year: 2017,
						rating: 4,
						// TODO discription: "Little Miguel has a big dream. He wants to become a successful musician, just like his grandfather Ernesto de la Cruz once was. But he left his wife back then, so music doesn't exactly have a high priority in his family. One day Miguel finds his grandfather's guitar in a chapel. When he starts to play it, a door to the underworld and to music opens for him.",
						directors: ["Lee Unkrich", "Adrian Molina"],
						writer: ["Lee Unkrich"],
						stars: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach", "Renée Victor", "Ana Ofelia Murguía", "Edward James Olmos"],
						genres: ["computer animated"],
					},
					{
						title: "Top Gun",
						year: 1986,
						rating: 6.9,
						// TODO discription: "The plot revolves around pilot Pete Mitchell (Cruise), who is transferred with his friend to an elite training school for fighter pilots called Top Gun. There, Mitchell falls in love with the instructor Charlie (Kelly McGillis). However, when his friend dies in an accident, he falls into a serious crisis.",
						director: ["Tony Scott"],
						writers: ["Jim Cash", "Jack Epps Jr."],
						stars: ["Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards", "Tom Skerritt"],
						genres: ["action"],
					}
				],
				favMusic: [		// TODO
					{
						artist: "Whitney Houston",
						title: "The Bodyguard",
						year: 1992,
						genres: ["r&b", "soul", "pop", "soundtrack"],
						sale: 45000000,
					},
				],
			},
		},
		{
			name: "Anna",
			birthday: {
				year: 1994,
				month: 9,
				day: 21,
			},
			location: {		// TODO
				city: "Moedling",
				country: "Austria",
			},
			codingLevel: {		// TODO
				level: 3,
				seniority: "junior",
			},
			favorites: {
				favBooks: [
					{
						title: "The Name Of The Wind",
						author: "Patrick Rothfuss",
						year: 2007,
						isNewerThan2000: true,
						age: 2023 - 2007,
						characters: ["Kvothe", "Bast", "Denna", "Taborlin"],
						review: "", // TODO
					},
					{
						title: "The Atlas Six", author: "Olivie Blake", year: 2020, isNewerThan2000: true, age: 2023 - 2020,
						characters: ["Atlas", "Libby Rhodes", "Nico de Varona", "Reina Mori"],
						review: "", // TODO
					}
				],
				favMovies: [
					{
						title: "Moana",
						year: 2016,
						rating: 7.6,
						// TODO description: "A young woman uses her seafaring talents to set sail for a fairytale island. She is accompanied on her adventure by the legendary demigod Maui.",
						directors: ["Ron Clements", "John Musker"],
						writers: ["John Musker", "Ron Clements", "Chris Williams"],
						stars: ["Moana", "Maui", "Te Fiti"],
						genres: ["Animation", "Fantasy", "Comedy"]
					},
					{
						title: "Burlesque",
						year: 2010,
						rating: 6.4,
						// TODO description: "A small-town girl ventures to Los Angeles and finds her place in a neo-Burlesque club run by a former dancer.",
						directors: ["Steve Antin"],
						writers: ["Steve Antin"],
						stars: ["Christina Aguilera", "Cher", "Stanley Tucci"],
						genres: ["Musical", "Romantic movie", "Drama"]
					},
					{
						title: "Howl's Moving Castle ",
						year: 2004,
						rating: 8.2,
						// TODO description: "When an unconfident young woman is cursed by a wicked old witch and turned into an old woman, she sees her only hope of breaking the spell again in an immoderate but insecure young wizard who lives with his companions in a four-legged rambling castle.",
						directors: ["Hayao Miyazaki"],
						writers: ["Diana Wynne Jones"],
						stars: ["Sophie Hatter", "Calcifer", "Howl"],
						genres: ["Anime", "Romantic movie", "Adventure"]
					},
					{
						title: "Les Misérables",
						year: 2012,
						rating: 7.5,
						// TODO description: "In 19th century France, Jean Valjean is hunted for decades by the ruthless policeman Javert after committing a crime. He agrees to take care of the daughter of a factory worker. This decision changes the lives of all three characters forever.",
						directors: ["Tom Hooper"],
						writers: ["William Nicholson", "Alain Boublil", "Claude-Michel Schönberg"],
						stars: ["Hugh Jackman", "Russell Crowe", "Anne Hathaway"],
						genres: ["Historical fiction", "Drama", "Musical"]
					},
				],
				favMusic: [
					{
						artist: "Shania Twain",
						title: "Come On Over",
						year: 1997,
						genres: ["country", "pop"],
						sale: 40000000,
					},
				],
			},
		},
		{
			name: "Danijel",
			birthday: {
				year: 1994,
				month: 1,
				day: 30,
			},
			location: {		// TODO
				city: "Vienna",
				country: "Austria",
			},
			codingLevel: { 	// TODO
				level: 2,
				seniority: "junior",
			},
			favorites: {
				favBooks: [
					{
						title: "Harry Potter",
						author: "JK Rowling",
						year: 1997,
						characters: ["Harry Potter", "Ron Weasley"],
						review: "I like the song because it's very energetic",
					},
					{
						title: "Vom Junkie zum YouTuber",
						author: "MontanaBlack",
						year: 2019,
						characters: ["Monte", "MontanaBlack88"],
						review: "I like the song because it's very energetic",
					},
				],
				favMovies: [
					{
						title: "Harry potter und der stein der weisen",
						year: 2001,
						rating: 7.6,
						// TODO discription: "",
						review: "I like the song because it's very energetic",
						directors: ["Chris columbus"],
						writers: ["Stuard Craig", "Neil lamont", "Lucianda Thomson"],
						stars: ["Harry Potter", "Hermione Granger", "Ron Weasley"],
						genres: ["Fantasy", "Horror"],
					},
					{
						title: "Harry potter und der Feuerkelch",
						year: 2005,
						rating: 6.9,
						// TODO discription: "",
						review: "I like the song because it's very energetic",
						directors: ["Mike Newell"],
						writers: ["Alan gilmore", "Neil Lamont", "FilmFlex"],
						stars: ["Harry potter", "Hermione Granger", "Ron Weasley"],
						genres: ["Fantasy", "Horror"],
					},
					{
						title: "Harry potter und der Halbblutprinz ",
						year: 2009,
						rating: 7.3,
						// TODO discription: "",
						review: "I like the song because it's very energetic",
						directors: ["Mike Newell"],
						writers: ["Alan gilmore", "Neil Lamont", "Filmlex"],
						stars: ["Harry Potter", "Hermione Granger", "Ron weasley"],
						genres: ["fantasy", "Horror"],
					},
					{
						title: "Harry potter und die Heiligtümer des Todes Teil 1 ",
						year: 2010,
						rating: 7.8,
						// TODO discription: "",
						review: "I like the song because it's very energetic",
						directors: ["David Yates"],
						writers: 8.9,
						stars: ["Harry potter", "Hermione Granger", "Ron Weasley"],
						genres: ["Horror", "Fantasy"],
					},
				],
			},
		},
	],
};


//average Age // TODO
let totalAge = 0;
for (const member of ourTeam.members) {
	totalAge += (2023 - member.birthday.year)
}

let averageAge = totalAge / ourTeam.members.length;
console.log(averageAge);


let totalCodingLevel = 0;
for (const member of ourTeam.members) {
	totalCodingLevel += member.codingLevel.level
}

let averageCodingLevel = totalCodingLevel / ourTeam.members.length;
console.log(averageCodingLevel);

// The youngest member //TODO
let youngestMember = ourTeam.members[0];
for (const member of ourTeam.members) {
	if (member.birthday.year > youngestMember.birthday.year) {
		youngestMember = member;
	}
}

console.log(youngestMember.name);

// The oldest member //TODO
let oldestMember = ourTeam.members[0];
for (const member of ourTeam.members) {
	if (member.birthday.year < oldestMember.birthday.year) {
		oldestMember = member;
	}
}

console.log(oldestMember.name);

//From the same location?

let locations = {}

for (const member of ourTeam.members) {
	if (member.location.city in locations) {
		locations[member.location.city] = locations[member.location.city] + ", " + member.name
	} else {
		locations[member.location.city] = member.name
	}
}
console.log(locations);

//Common music styles
let commonMusicGenres = {}

for (const member of ourTeam.members) {

	if ("favMusic" in member.favorites) {

		for (const music of member.favorites.favMusic) {
			for (const musicGenre of music.genres) {
				if (musicGenre in commonMusicGenres) {
					commonMusicGenres[musicGenre] = commonMusicGenres[musicGenre] + ", " + member.name
				} else {
					commonMusicGenres[musicGenre] = member.name
				}
			}

		}
	} else{
		console.log(member.name + " has no favorite music!");
	}

}
console.log(commonMusicGenres);

//Common movie styles  -- extra TODO
let commonMoviesGenres = {}

for (const member of ourTeam.members) {
	for (const movie of member.favorites.favMovies) {
		for (const movieGenre of movie.genres) {
			if (movieGenre in commonMoviesGenres) {
				commonMoviesGenres[movieGenre] = commonMoviesGenres[movieGenre] + ", " + member.name
			} else {
				commonMoviesGenres[movieGenre] = member.name;
			}
		}

	}
}
console.log(commonMoviesGenres);


// Choose theme for each Member

// Add an image

// OPTIONAL TASK:Are you ready?



// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" },
	];
} catch (error) {
	toExport = { error: error.message };
}

export { toExport };
