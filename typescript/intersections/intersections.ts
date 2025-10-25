// basicamente, intersections são pra você juntar vários tipos em um só

interface Human {
    name: string, 
    age: number
}

interface Robot {
    material: string,
    fuel: number
}

type Cyborg = Robot & Human 

const cyborg: Cyborg = {
    name: "Robocop",
    age: 15,
    material: "ferro",
    fuel: 50
}

console.log(cyborg)