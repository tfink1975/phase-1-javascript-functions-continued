function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
} saturdayFun("bathe my dog");

function mondayWork(event = "go to the office") {
    return `This Monday, I will ${event}.`;
} mondayWork("work from home");

function wrapAdjective(special = '*') {
    return function(emphatic = "special") {
        return `You are ${special}${emphatic}${special}!`;
    }
}
