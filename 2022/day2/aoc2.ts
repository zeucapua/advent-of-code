const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");
const rounds = [];
for (let l of lines) {
    let round = l.split(" ");
    if (round == [""]) { break; }
    rounds.push(round);
}
const testRounds = [["A", "Y"],["B","X"],["C","Z"]];

async function p1(rs) {
    let score = 0;
    for (let r of rs) {
        let elf = r[0];
        let player = r[1];
        if (player == "X") {
            switch (elf) {
                case "A": score += 4; break; // 1 (rock) + 3 (draw)
                case "B": score += 1; break; // 1 + 0 (loss)
                case "C": score += 7; break; // 1 + 6 (win)
            }
        }
        else if (player == "Y") {
            switch (elf) {
                case "A": score += 8; break; // 2 (paper) + 6 (win)
                case "B": score += 5; break; // 2 + 3 (draw)
                case "C": score += 2; break; // 2 + 0 (loss)
            }
        }
        else if (player == "Z") {
            switch (elf) {
                case "A": score += 3; break; // 3 (scissors) + 0 (loss)
                case "B": score += 9; break; // 3 + 6 (win)
                case "C": score += 6; break; // 3 + 3 (draw)
            }
        }
    }
    return score;
}


async function p2(rs) {
    let score = 0;
    for (let r of rs) {
        let elf = r[0];
        let outcome = r[1];
        if (outcome == "X") { // lose (0)
            switch (elf) {
                case "A": score += 3; break; // scissors (3) 
                case "B": score += 1; break; // rock (1)
                case "C": score += 2; break; // paper (2)
            }
        }
        else if (outcome == "Y") { // draw (3)
            switch (elf) {
                case "A": score += 4; break; // rock (1)
                case "B": score += 5; break; // paper (2)
                case "C": score += 6; break; // scissors (3)
            }
        }
        else if (outcome == "Z") { // win (6)
            switch (elf) {
                case "A": score += 8; break; // paper (2)
                case "B": score += 9; break; // scissors (3)
                case "C": score += 7; break; // rock (1)
            }
        }
    }
    return score;
}

let s = await p2(rounds);
console.log(s);
