let Mydate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getday = function() {
        return this.day;
    }
    this.getmonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setday = function() {
       this.day = day;
    }
    this.setmonth = function() {
        this.month = month;
    }
    this.setyear = function() {
        this.year = year;
    }
}
let date = new MyDate(2, 2, 2007);

date.setday(10);
date.setmonth(10);
date.setyear(2019);

let day = date.getDay();

let month = date.getMonth();

let year = date.getYear();

alert(day + "/" + month + "/" + year);