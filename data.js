let ourTeam = {
  name: "FEDHA",
  members: [
    {
      name: "Franzi",
      birthday: {
        year: 1994,
        month: 05,
        day: 08,
      },
      location: "Vienna",
			favourites: {
				favBooks: [
						{
								title: "Eragon - Das Vermächtnis des Drachenreiters",
								author: "Christopher Paolini",
								year: 2003,
								isNewerThan2000: true,
								characters: ["Eragon", "Saphira", "Arya", "Brom"],
						},
						{
								title: "Tintenherz",
								author: "Cornelia Funke",
								year: 2004,
								isNewerThan: true,
								characters: ["Meggie", "Mo", "Elinor", "Gwin"],
						},
				],
				favMovies: [
					{
						title: "My Neighbor Totoro",
						year: 1988,
						rating: 8.1,
						description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
						directors: ["Hayao Miyazaki"],
						writers: ["Hayao Miyazaki"],
						stars: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
						genre: ["Fantasy", "Comedy", "Family"],
					},
					{
						title: "Naruto",
						year: 2002,
						rating: 8.4,
						description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
						directors:["Osamu Kobayashi"],
						writers: ["Masashi Kishimoto", "Chie Nakamura"],
						stars: ["Junko Takeuchi", "Chie Nakamura", "Kazuhiko Inoue"],
						genre: ["Adventure", "Animation	", "Action"],
					},
					{
						title:"The dark Knight rises",
						year: 2012,
						rating: 8.4,
						description: "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
						directors: ["Christopher Nolan"],
						writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
						stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
						genre: ["Action", "Crime", "Drama"],
					},
					{
						title: "Inglorious Basterds",
						year: 2009,
						rating: 8.4,
						description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
						directors: ["Quentin Tarantino"],
						writers: ["Quentin Tarantino"],
						stars: ["Brad Pitt", "Diane Kruger", "Melanie Laurent"],
						genre: ["Action", "Drama", "War"],
						
					}
					
				]
			}
    },
    {
      name: "Eroll",
      birthday: {
        year: 1800,
        month: 00,
        day: 00,
      },
      location: "Vienna",
    },
    {
      name: "Heidelinde",
      birthday: {
        year: 1980,
        month: 11,
        day: 24,
      },
      location: "Graz",
    },
    {
      name: "Anna",
      birthday: {
        year: 1994,
        month: 09,
        day: 21,
      },
      location: "Moedling",
    },
    {
      name: "Danijel",
      birthday: {
        year: 1994,
        month: 01,
        day: 30,
      },
      location: "Vienna",
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
        ],
      },
    },
  ],
};

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
