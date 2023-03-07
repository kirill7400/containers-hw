import Team from "./class/Team";
import ErrorRepository from "./class/ErrorRepository";
import Settings from "./class/Settings";

const team1 = new Team()

team1.add('Max')
team1.add('Peter')
team1.add('Ivan')

const list = ['Rembo', 'Geralt', 'Dima', 'Geralt']

team1.addAll(list)

console.log(team1.toArray())
console.log(team1.members)

const errors = new ErrorRepository()

console.log(errors.translate(700))

const settings = new Settings
console.log(settings.settings)