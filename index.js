class Cat {
    say() {
        return 'meow';
    }
}

class Dog {
    say() {
        return 'woof';
    }
}

class Bird {
    say() {
        return 'chirp';
    }
}

let animals = [
    new Cat(),
    new Dog(),
    new Bird()
]

function listen(animals) {
    let say = '';
    let sounds = [];
    
    
    sounds.push(new Cat('say'));
    sounds.push(new Dog('say'));
    sounds.push(new Bird('say'));
    
    
    animals.forEach(animal => {
        say += `${sounds.draw()}`
    });

    return say;
}






