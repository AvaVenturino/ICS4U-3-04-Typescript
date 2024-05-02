/**
* This program is the Towers of Hanoi program
*
* @author  Ava Venturino
* @version 0.5
* @since   2020-09-01
*/

import { createPrompt } from 'bun-promptx'

function hanoi(ndisks: number, startPeg: number = 1, endPeg: number = 3): void {
    // this is the recursive Towers of Hanoi solution
    if (ndisks == 1) {
        console.log(`Move disk 1 from peg ${startPeg} to peg ${endPeg}`)
    } else {
        hanoi(ndisks - 1, startPeg, 6 - startPeg - endPeg)
        console.log(`Move disk ${ndisks} from peg ${startPeg} to peg ${endPeg}`)
        hanoi(ndisks - 1, 6 - startPeg - endPeg, endPeg)
    }
}

function main(): void {
    // this function solves the Towers of Hanoi problem

    // input
    console.log("Towers of Hanoi program\n")
    const ndisks: number = parseInt(createPrompt("How many disks would you like in your tower (1->): "), 10)

    // process
    hanoi(ndisks)

    // output
    console.log("\nDone.")
}

main()
