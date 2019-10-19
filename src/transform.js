function groupAdultsByAgeRange(peopleList) {
	if (peopleList.length > 0) {
		//Filter people who are 18 and above
		const ageAbove18 = peopleList.filter(people => people.age >= 18);

		//Function to fetch category
		const ageGroup = age => {
			if (age <= 20 && age >= 18) return "20 and younger";
			if (age > 20 && age <= 30) return "21-30";
			if (age > 30 && age <= 40) return "31-40";
			if (age > 40 && age <= 50) return "41-50";
			if (age > 50) return "51 and older";
		};

		//Function to group the people in the respective age categories
		const resultAgeGroup = people =>
			ageAbove18.reduce(
				(groups, people) => {
					const ageCategory = ageGroup(people.age);
					return {
						...groups,
						[ageCategory]: [...groups[ageCategory], people]
					};
				},
				{
					"20 and younger": [],
					"21-30": [],
					"31-40": [],
					"41-50": [],
					"51 and older": []
				}
			);
		const resultObj = resultAgeGroup();

		//Looping Object keys to remove empty categories
		for (var key in resultObj) {
			if (resultObj[key].length === 0) {
				delete resultObj[key];
			}
		}
		return resultObj;
	} else {
		return {};
	}
}
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
