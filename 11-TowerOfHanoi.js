// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). 
//This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. 
//The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
//the smallest disk at the top (making a conical shape). The other two rods are empty to 
//begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod 
//(can't be the original rod where it was stacked before) where it will be stacked in 
//the ascending order as well. This should be done obeying the following rules: i) Only 
//one disk may be moved at a time ii) Each move consists of taking the upper disk from one 
//of the rods and sliding it onto another rod, on top of the other disks that may already be 
//present on that rod. iii) A larger disk may not placed on top of a smaller disk

// Input:

// Rod A	Rod B	Rod C
// ----		
// ---------		
// -------------		
// Output:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each 
//movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

function hanoi(disk, first, second, third){
    if (disk > 0){
        hanoi(disk-1, first, third, second)
        console.log(`Move disk ${disk} from ${first} to ${third}`)
        hanoi(disk-1, second, first, third)
    }
}

console.log(hanoi(5, 'A', 'B', 'C'))

// After 7 calls, disk 1 is moved from A to C

// 3 disks takes 7 moves
// 4 disks takes 15 moves
// 5 disks takes 31 moves

// The runtime complexity is Exponential O(2^n)