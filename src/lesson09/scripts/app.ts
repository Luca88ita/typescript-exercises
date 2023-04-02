// Utility Types

// Partial

interface Assignment {
	studentId: string;
	title: string;
	grade: number;
	verified?: boolean;
}

const updateAssigment = (
	assign: Assignment,
	propsToUpdate: Partial<Assignment>
): Assignment => {
	return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
	studentId: 'compsci123',
	title: 'Final Project',
	grade: 0,
};

const assignGraded: Assignment = updateAssigment(assign1, { grade: 95 });
console.log(assignGraded);

//-----------------------------------//

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
	// function...
	return assign;
};

const assignVerified: Readonly<Assignment> = {
	...assignGraded,
	verified: true,
};
// assignVerified.grade = 88; // cannot work because we stated assignVerified i Readonly

//recordAssignment(assignGraded);//not working because we still miss the Required property "verified"
recordAssignment({ ...assignGraded, verified: true }); // this works because it has all the properties

//-----------------------------------//

// Record

const hexColorMap: Record<string, string> = {
	red: 'FF0000',
	green: '00FF00',
	blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
	Sara: 'B',
	Kelly: 'U',
};

interface Grades {
	assign1: number;
	assign2: number;
}

const gradeData: Record<Students, Grades> = {
	Sara: { assign1: 85, assign2: 93 },
	Kelly: { assign1: 76, assign2: 15 },
};

//-----------------------------------//

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
	studentId: 'k123',
	grade: 85,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
	studentId: 'k123',
	title: 'Final Project',
	// grade:85, // we cannot put it in because we omitted it
};

//-----------------------------------//

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, 'U'>;

type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// NonNullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//-----------------------------------//

// ReturnType

//type newAssign = { title: string; points: number }; // I commentthis because there`s a better way how to return an output of a speciifed type

const createNewAssign = (title: string, points: number) /*: newAssign*/ => {
	return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>; //se io vario il return della funzione, di conseguenza mi varia anche il tipo

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);

//-----------------------------------//

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

//-----------------------------------//

// Awaited - helps us with the ReturnType of a Promise

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

const fetchUsers = async (): Promise<User[]> => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			if (err instanceof Error) console.log(err.message);
		});
	return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));

console.log();
