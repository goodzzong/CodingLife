// skill = "abk"
// skillTrees = ["acb", "bsek", "aebrk"]
// 1. 주어진 skill의 경우의 수를 구한다. ["a", "ab", "abk"]  
// 2. skillTrees 각각의 skillTree에서 해당 skill 요소들을 구한다. ["ab", "bk", "abk"]  
// 3. 2를 돌면서 1에 인덱스가 있는지 확인하며 개수를 구한다.  

const getNumberOfCases = (skill) => {
	const numberOfCases = [];

	const addValue = (n, str) => {
		return !numberOfCases[0] ? str : numberOfCases[n - 1] + str;
	}

	[...skill].forEach((s, i) => numberOfCases.push(addValue(i, s)));
	return numberOfCases;
};

const getFilteredSkillTrees = (skill, skillTrees) => {
	return skillTrees.map(skillTree =>
		[...skillTree].filter(s => skill.includes(s)).join('')
	);
}



const getCorrectSkillTreesCount1 = (skill, skillTrees) => {
	const numberOfcases = getNumberOfCases(skill);
	const filteredSkillTrees = getFilteredSkillTrees(skill, skillTrees);

	return filteredSkillTrees.filter(f => numberOfcases.indexOf(f) !== -1).length;
};




const includeCheck = (skill, str) => {
	return Array.from(str).filter(v => skill.includes(v)).join('');
};

const isSkill = (skill, str) => {
	return skill.includes(str);
};

const getCorrectSkillTreesCount = (skill, skill_trees) => {
	const extractSkillTrees = skill_trees.map(v => includeCheck(skill, v));
	const result = extractSkillTrees.reduce(
		(acc, cur) => {
			return skill.startsWith(cur) ? acc + 1 : acc
		},
		0
	);
	console.log(result);
	return result;
};

test('getFilteredSkillTrees', () => {
	expect(getFilteredSkillTrees("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toEqual(["BCD", "CBD", "CB", "BD"]);
});

test('getNumberOfCases', () => {
	expect(getNumberOfCases("CBD")).toEqual(['C', 'CB', 'CBD']);
});

test('getCorrectSkillTreesCount', () => {
	expect(getCorrectSkillTreesCount("CBD", ["BACDE", "CBADF", "AECB", "BDA", "B", "D", "C", "CC", "CBDCBD", "QQ", "cbd", "CCB"])).toBe(5);
	expect(getCorrectSkillTreesCount("NJKAX", ["BACDE", "CBADF", "AECB", "BDA", "B", "D", "C", "CC", "CBDCBD", "QQ", "cbd", "CCB"])).toBe(0);
	expect(getCorrectSkillTreesCount("A", ["A"])).toBe(1);
	expect(getCorrectSkillTreesCount("A", ["ABA"])).toBe(0);
	expect(getCorrectSkillTreesCount("BA", ["CDBVA"])).toBe(1);
	expect(getCorrectSkillTreesCount("BAC", ["D"])).toBe(0);
	expect(getCorrectSkillTreesCount("BAC", [""])).toBe(0);
	expect(getCorrectSkillTreesCount("ABCDEFGHIFKLMNOP", ["P"])).toBe(0);
	expect(getCorrectSkillTreesCount("ABCDEFGHIFKLMNOP", ["P", "AC"])).toBe(0);
	expect(getCorrectSkillTreesCount("ABCDEFGHIFKLMNOP", ["P", "AC", "A", "A"])).toBe(2);
	expect(getCorrectSkillTreesCount("ABK", ["ABC", "BSEK", "AEBRK"])).toBe(2);
	expect(getCorrectSkillTreesCount("AAA", ["ABC", "BSEK", "AEBRK"])).toBe(2);
}) 