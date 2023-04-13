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
      location: {
				city:"Vienna",
				country: "Austria",
			},
      codingLevel: {  //Aufg. Senority
        level: 4,
        senority: "junior",
      },
			colors: [ //Aufg. Theme Color
				{
					primary: { red: 240, green: 248, blue: 255 }, //#F0F8FF
					secondary: { red: 25, green: 25, blue: 112 }, //#191970
				},
			],
			favorites: {
				favBooks: [
					{
						title: "Eragon - Das Vermächtnis des Drachenreiters",
						author: "Christopher Paolini",
						year: 2003,
						characters: ["Eragon", "Saphira", "Arya", "Brom"],
            review: ""                                                        //TODO!
					},
					{
						title: "Tintenherz",
						author: "Cornelia Funke",
						year: 2004,
						characters: ["Meggie", "Mo", "Elinor", "Gwin"],
            review: "",                                                        //TODO !
					},
				],
				favMovies: [
					{
						title: "My Neighbor Totoro",
						year: 1988,
						rating: 8.1,
						directors: ["Hayao Miyazaki"],
						writers: ["Hayao Miyazaki"],
						stars: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
						genres: ["Fantasy", "Comedy", "Family"],
					},
					{
						title: "Naruto",
						year: 2002,
						rating: 8.4,
						directors: ["Osamu Kobayashi"],
						writers: ["Masashi Kishimoto", "Chie Nakamura"],
						stars: ["Junko Takeuchi", "Chie Nakamura", "Kazuhiko Inoue"],
						genres: ["Adventure", "Animation	", "Action"],
					},
					{
						title: "The dark Knight rises",
						year: 2012,
						rating: 8.4,
						directors: ["Christopher Nolan"],
						writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
						stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
						genres: ["Action", "Crime", "Drama"],
					},
					{
						title: "Inglorious Basterds",
						year: 2009,
						rating: 8.4,
						directors: ["Quentin Tarantino"],
						writers: ["Quentin Tarantino"],
						stars: ["Brad Pitt", "Diane Kruger", "Melanie Laurent"],
						genres: ["Action", "Drama", "War"],
					}

				]
			}
		},
		{
			name: "Euron",
			birthday: {
				year: 1998,
				month: 10,
				day: 1,
			},
			location: {
				city: "Vienna",
				country: "Austria",
			},
      codingLevel: { //Aufg. Senority
        level: 7,
        senority: "junior",
      },
			colors: [
				{
					primary: { red: 0, green: 0, blue: 0 },
					secondary: { red: 0, green: 0, blue: 0 },
				},
			],
			favorites: {
				favBooks: [
					{
						title: "Denke nach und werde reich",
						author: "Napoleon Hill",
						year: 1937,
						characters: ["Napoleon"],
            review: "", //TODO - muss Euron machen

					},
					{
						title: "Harry Potter und der Stein der Weisen",
						author: "J.K Rowling",
						year: 1997,
						characters: ["Harry Potter","Hermine Granger","Lord Voldemort","Ron Weasley"],
            review: "", //TODO, Muss Euron machen
					}
				],
				favMovies: [
					{
						title: "The Godfather",
						year: 1972,
						rating: 9.2,
						director: ["Francis Ford Coppola"],
						writer: ["Mario Puzo","Francis Ford Coppola"],
						stars: ["Marlon Brando", "Al Pacino", "Mario Puzo", "Robert Duvall", "Albert S. Rudd"],
						genres: ["Mafia", "Crime", "Drama"]
					},
					{
						title: "Harry Potter and the Philosopher's Stone",
						year: 2003,
						rating: 8,
						director: ["Chris Columbus"],
						writers: ["Steve Kloves","J. K. Rowling"],
						stars: ["Harry Potter","Hermine Granger","Lord Voldemort","Ron Weasley"],
						genres: ["action","fantasy","magic"],
					},
					{
						title: "The Godfather 2",
						year: 1974,
						rating: 9,
						directors: ["Francis Ford Coppola"],
						writer: ["Mario Puzo","Francis Ford Coppola"],
						stars: ["Marlon Brando", "Al Pacino", "Mario Puzo", "Robert Duvall", "Albert S. Rudd"],
						genres: ["Mafia", "Crime", "Drama"],
					},
					{
						title: "American Sniper",
						year: 2014,
						rating: 7.3,
						director: ["Clint Eastwood"],
						writers: ["Jason Hall","Chris Kyle","Scott McEwen"],
						stars: ["Chris Kyle", "Goat-Winston", "Young Chris Kyle", "Wayne Kyle", "Deby Kyle"],
						genre: ["Action","Biography","Drama","War"],
					}
				],
			}
		},
		{
			name: "Heidelinde",
			birthday: {
				year: 1980,
				month: 11,
				day: 24,
			},
			location: {
				city: "Graz",
				country: "Austria",
			},
      codingLevel: { //Aufg. Senority
        level: 9,
        senority: "junior",
      },
			colors: [
				{
					primary: { red: 0, green: 0, blue: 0 },
					secondary: { red: 0, green: 0, blue: 0 },
				},
			],
			favorites: {
				favBooks: [
					{
						title: "Stoizismus",
						author: "Jonas Salzgeber",
						year: 2022,
						//isNewerThan2000: true,
						characters: ["Luise", "Tom", "Jonas"],
            review: "", //TODO - Muss Heidi machen
					},
					{
						title: "Island Life My Australia",
						author: "Tim Winton",
						year: 2016,
						isNewerThan2000: false,
						characters: ["Richard", "Tony", "William"],
            review: "", //TODO - muss Heidi machen
					}
				],
				favMovies: [
					{
						title: "The Whole Nine Yards",
						year: 2000,
						rating: 6.7,
						director: ["Jonathan Lynn"],
						writer: ["Mitchell Kapner"],
						stars: ["Bruce Willis", "Matthew Perry", "Amanda Peet", "Michael Clarke Duncan", "Natasha Henstridge", "Rosanna Arquette", "Kevin Pollak", "Harland Williams"],
						genres: ["Comedy", "Crime Black Comedy", "Romance", "Gangster Film"]
					},
					{
						title: "Die Hard",
						year: 1988,
						rating: 8.2,
						director: ["John McTiernan "],
						writers: ["Jeb Stuart", "Steven E. de Souza"],
						stars: ["Sylvester Stallone", "Richard Gere", "Clint Eastwood", "Harrison Ford", "Burt Reynolds", "Nick Nolte", "Mel Gibson",],
						genre: ["action"],
					},
					{
						title: "COCO- more alive than life",
						year: 2017,
						rating: 4,
						directors: ["Lee Unkrich", "Adrian Molina"],
						writer: ["Lee Unkrich"],
						stars: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach", "Renée Victor", "Ana Ofelia Murguía", "Edward James Olmos"],
						genres: ["computer animated"],
					},
					{
						title: "Top Gun",
						year: 1986,
						rating: 6.9,
						director: ["Tony Scott"],
						writers: ["Jim Cash", "Jack Epps Jr."],
						stars: ["Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards", "Tom Skerritt"],
						genre: ["action"],
					}
				]
			},
		},
		{
			name: "Anna",
			birthday: {
				year: 1994,
				month: 09,
				day: 21,
			},
      location: {
				city: "Moedling",
				country: "Austria",
			},
      codingLevel: { //Aufg. Senority
        level: 9,
        senority: "junior",
      },
			colors: [
				{
					primary: { red: 0, green: 0, blue: 0 },
					secondary: { red: 0, green: 0, blue: 0 },
				},
			],
			favorites: {
				favBooks: [
					{
						title: "The Name Of The Wind",
            author: "Patrick Rothfuss",
            year: 2007,
            //isNewerThan2000: true, 
            //age: 2023 - 2007,
						characters: ["Kvothe", "Bast", "Denna", "Taborlin"],
            review: "", //TODO - muss Anna machen 
					},
					{
						title: "The Atlas Six",
            author: "Olivie Blake",
            year: 2020,
            //isNewerThan2000: true,
            //age: 2023 - 2020,
						characters: ["Atlas", "Libby Rhodes", "Nico de Varona", "Reina Mori"],
            review: "", //TODO - Muss Anna machen
					}
				],
				favMovies: [
					{
						title: "Moana", year: 2016, rating: 7.6,
						directors: ["Ron Clements", "John Musker"],
						writers: ["John Musker", "Ron Clements", "Chris Williams"],
						stars: ["Moana", "Maui", "Te Fiti"],
						genres: ["Animation", "Fantasy", "Comedy"]
					},
					{
						title: "Burlesque", year: 2010, rating: 6.4,
						directors: ["Steve Antin"],
						writers: ["Steve Antin"],
						stars: ["Christina Aguilera", "Cher", "Stanley Tucci"],
						genres: ["Musical", "Romantic movie", "Drama"]
					},
					{
						title: "Howl's Moving Castle ", year: 2004, rating: 8.2,
						directors: ["Hayao Miyazaki"],
						writers: ["Diana Wynne Jones"],
						stars: ["Sophie Hatter", "Calcifer", "Howl"],
						genres: ["Anime", "Romantic movie", "Adventure"]
					},
					{
						title: "Les Misérables", year: 2012, rating: 7.5,
						directors: ["Tom Hooper"],
						writers: ["William Nicholson", "Alain Boublil", "Claude-Michel Schönberg"],
						stars: ["Hugh Jackman", "Russell Crowe", "Anne Hathaway"],
						genres: ["Historical fiction", "Drama", "Musical"]
					},

				]
			},
		},
		{
			name: "Danijel",
			birthday: {
				year: 1994,
				month: 01,
				day: 30,
			},
			location: {
				city: "Vienna",
				country: "Austria",
			},
      codingLevel: {
        level: 10,
        senority: "junior",
      },
			colors: [
				{
					primary: { red: 0, green: 0, blue: 0 },
					secondary: { red: 0, green: 0, blue: 0 },
				},
			],
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
						review: "I like the song because it's very energetic",
						directors: ["David Yates"],
						writers: 8.9,
						stars: ["Harry potter", "Hermione Granger", "Ron Weasley"],
						genres: ["Horror", "Fantasy"],
					},
				]
			},
		},
	],
};


//Calculate the average age of members + CodingLevel

let calculateAge = 0;
for (let ageOfMembers of ourTeam.members) {
  calculateAge += (2023 - ageOfMembers.birthday.year)
}
let averageAge = calculateAge / ourTeam.members.length;
console.log(averageAge);

let calculateLevel = 0;
for (let levelOfMembers of ourTeam.members) {
  calculateLevel += levelOfMembers.codingLevel.level
}
let averageCodingLevel = calculateLevel / ourTeam.members.length;
console.log(averageCodingLevel);

//Calculate the youngest member
let youngestMember = ourTeam.members[0];
for (let ageMember of ourTeam.members) {
  if (ageMember.birthday.year > youngestMember.birthday.year) {
    youngestMember = ageMember;
  }
}
console.log("our youngest member is " + youngestMember.name);

let oldestMember = ourTeam.members[0];
for (let ageOldestMember of ourTeam.members) {
  if (ageOldestMember.birthday.year < oldestMember.birthday.year) {
    oldestMember = ageOldestMember;
  }
}
console.log("our oldest member is " + oldestMember.name);

//From the same Location?
let locations = {}

for (const cityOfMember of ourTeam.members) {
	if (cityOfMember.location.city in locations) {
		locations[cityOfMember.location.city] = locations[cityOfMember.location.city] + ", " + cityOfMember.name
	} else {
		locations[cityOfMember.location.city] = cityOfMember.name
	}
}
console.log(locations);

//Common film genres
let commonGenres = {}

for (let genresOfMembers of ourTeam.members) {
	for (let movieOfMembers of genresOfMembers.favorites.favMovies) {
		for (let movieGenre of movieOfMembers.genres) {
		}}}
