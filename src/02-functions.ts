import { friends, colleagues } from './01-basics';
import { Friend, Colleague } from './myTypes'


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


function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));


function addColleague(colleagues : Colleague[] , name:string , department:string, email:string) {
    var newExtension:number = 0;

    colleagues.forEach(c => {if(c.contact.extension > newExtension){ newExtension = c.contact.extension + 1;}} )
    colleagues.forEach
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: newExtension ,
        },
    };;
    colleagues.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));