let ourTeam = {
	name: "FEDHA",
	members: [
	{name: "Franzi", year: 1994, month: 05, day: 08, location: "Vienna"},
	{name: "Eroll", year: 1800, month: 00, day: 00, location: "Vienna"},
 "Danijel",
 "Heidelinde",
 {name: "Anna", year:1994, month: 09, day: 21, location: "Moedling"}
	]
}






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
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };
