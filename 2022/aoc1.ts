const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

async function p1(lines) {
    let maxCalories : int = 0;
    let currentElf : int = 0;
    for (let l of lines) { 
        if (l == "") { maxCalories = Math.max(currentElf, maxCalories); currentElf = 0;}
        else { currentElf += Number.parseInt(l); }
    }

    console.log(maxCalories);
}

async function p2(lines) {
    let elves : Number[] = [];
    let currentElf : int = 0;
    for (let l of lines) {
        if (l == "") { elves.push(currentElf); currentElf = 0; continue; }
        currentElf += Number.parseInt(l);
    }
    elves.sort(function(a,b){ return b - a });
    let topThree : int = 0;
    for (let e of elves.splice(0,3)) { topThree += e; }
    console.log(topThree);
}


p1(lines);
p2(lines);
