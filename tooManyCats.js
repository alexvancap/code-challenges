// A good friend keeps bringing cats to your house and leaving them. You calculated it and they leave an average of 1.15 cats a day, every day except Sunday. Given two dates, predict how many cats you will collect after the end of the time period. Include the first and last day (if they are not a Sunday). Return a whole number of cats (rounded down).

function catPredictor (startDate, endDate) {
    let days = 0;
    for (let date = new Date(startDate); date <= new Date(endDate); date.setDate(date.getDate() + 1)) {
        if (date.getDay() !== 0) days++;
    }
    return Math.floor(days * 1.15);
}