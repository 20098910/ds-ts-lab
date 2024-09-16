import { friends, colleagues } from './01-basics';
import { Friend, Colleague, EmailContact } from './myTypes'


function older(f: Friend): string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

//console.log(older(friends))




function allOlder(friends: Friend[]): void {
    friends.forEach(friend => {
        friend.age += 2;
    });
    console.log(friends);
}
allOlder(friends);


function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}


console.log(highestExtension(colleagues.current));


function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    var newExtension: number = 0;

    colleagues.forEach(c => { if (c.contact.extension > newExtension) { newExtension = c.contact.extension + 1; } })
    colleagues.forEach
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: newExtension,
        },
    };;
    colleagues.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(friends: Friend[], conditions: (friend: Friend) => boolean): Friend[] {
    return friends.filter(conditions);
}


console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));