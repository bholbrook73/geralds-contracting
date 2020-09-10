// wood dimensions
const twoByFourWidthInInches = 3.5;
const twoByFourHeightInInches = 1.5
const postWidthInInches = 3.5;

// geralds numbers
const maxBoardLengthInFeet = 8;
const distanceBetweenStudsInInches = 16;

// this function takes a number of feet of the length of a wall and 
// returns the number of inches inside the posts
function calcInnerWallWidth( outerWallWidthInFeet:number ){
    
    let innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 2);
    return innerWallWidthInInches;

}

// gerald wants 10% waste markup on total studs
function accountForWaste( perfectNumberOfStuds:number ){

    return Math.ceil(perfectNumberOfStuds * 1.1);

}

// this calculates the number of studs required for a length of wall
function studsInLength( lengthInInches:number, distanceApartInInches:number ){

    return Math.ceil( lengthInInches / distanceApartInInches );

}

function calcStudsOnTopAndBottom( lengthInInches:number ){
    
    let maxBoardLengthInInches = maxBoardLengthInFeet * 12;
    return Math.ceil( lengthInInches / maxBoardLengthInInches ) * 2;

}

// gets the number of studs in an entire wall
function buildWall( outerLengthInFeet:number ){

    let length = calcInnerWallWidth( outerLengthInFeet );
    let studsInsideWall = studsInLength( length, distanceBetweenStudsInInches );
    let studsOnTopAndBottom = calcStudsOnTopAndBottom( length );
    let totalStuds = studsInsideWall + studsOnTopAndBottom + 1;
    return totalStuds;

}

// get the number of studs in an entire house
function buildHouse( widthInFeet:number, lengthInFeet:number ){

    let wall1 = buildWall( widthInFeet ) * 2;
    let wall2 = buildWall( lengthInFeet ) * 2;
    return wall1 + wall2;

}

export function calcWallStuds( houseWidthInFeet:number, houseLengthInFeet:number ){

    let totalStuds = buildHouse( houseWidthInFeet, houseLengthInFeet );
    let studsPlusWaste = accountForWaste( totalStuds );

    return {
        totalStuds: totalStuds,
        studsPlusWaste: studsPlusWaste
    };

}

export default calcWallStuds;