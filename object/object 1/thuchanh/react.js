function Student(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.getInfor = function () {
        return 'id = ' + this.id + 'name = ' + this.name + ' address = ' + this.address;
    }
}

let student = new Student(1, 'bui tien dung', 'nghe an ');
alert(student.getInfor());