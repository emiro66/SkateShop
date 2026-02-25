const people = [
    { age: 16, pants: "джинсы", intoxicationLevel: 1 },
    { age: 22, pants: "шорты", intoxicationLevel: 3 },
    { age: 14, pants: "юбка", intoxicationLevel: 0 },
    { age: 19, pants: "джинсы", intoxicationLevel: 2 },
    { age: 17, pants: "шорты", intoxicationLevel: 4 },
    { age: 21, pants: "юбка", intoxicationLevel: 1 },
    { age: 18, pants: "джинсы", intoxicationLevel: 0 },
    { age: 20, pants: "шорты", intoxicationLevel: 3 },
    { age: 18, pants: "юбка", intoxicationLevel: 2 },
    { age: 16, pants: "джинсы", intoxicationLevel: 4 }
];

function jeskaProverka() {
    let proshedshie = 0
    people.forEach(chel => {
        if (chel.age >= 18 && chel.pants == "джинсы" && chel.intoxicationLevel <= 2) {
            console.log('Проходит')
        } else if (chel.age < 18) {

            console.log('Пшел нахуй!!! чучка несовершеннолетняя!')
        } else if (chel.pants != "джинсы") {

            console.log('Пшел нахуй!!! чучка голая')
        } else if (chel.intoxicationLevel <= 2) {

            console.log('Пшел нахуй!!! чучка бухая')
        }

    });

}

jeskaProverka()