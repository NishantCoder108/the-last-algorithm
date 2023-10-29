export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpNumber = Math.floor(Math.sqrt(breaks.length));

    //check from where, break is starting

    let i = jumpNumber;

    for (; i < breaks.length; i += jumpNumber) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpNumber;

    //now interate one to one check ,to all below jumpNumber i.e. if jumpNumber 3 , now it will iterate till 3

    for (let j = 0; j < jumpNumber && i < breaks.length; i++, j++) {
        if (breaks[i]) {
            return i; //we are find number i.e. index
        }
    }

    return -1;
}

/**
 * Just check ,from what height ,crystall ball will be crack when we fall down
 * e.g [false, false ,false ,false , true, true true]
 * 
 * 
 * so we use Linear search but , we use sqrt(n) i.e.  √ 9 

 */
