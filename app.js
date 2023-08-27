class Rename {
    constructor (surname,name,age,gender){
    this.surname = surname;
    this.name = name ;
    this.age = age;
    this.gender = gender
}
updateName (newName){
    this.name = newName
}
}
class Admin extends Rename {
    constructor(surname,name,age,gender,weight) {
    super (surname,name,age,gender);
    this.weight = weight
}
}


let rename = new Rename ("Nuraliyeva","Rubabe",21,"qadin");
rename.updateName = "Nigar";
console.log (rename)