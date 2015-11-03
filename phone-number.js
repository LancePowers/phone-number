function PhoneNumber(num) {
    this.rawNumber = num;
    this.finalNumber = '';
}

PhoneNumber.prototype.number = function () {
    var filteredNum = this.numFilter();
    if (filteredNum.length === 10) {
        this.finalNumber = filteredNum;
        return this.finalNumber;
    } else {
        this.finalNumber = this.countryCode(filteredNum);
        return this.finalNumber;
    }

}

PhoneNumber.prototype.numFilter = function () {
    var result = '';

    for (var i = 0; i < this.rawNumber.length; i++) {
        var int = parseInt(this.rawNumber.charAt(i))
        if (isNaN(int) === false) {
            result += int
        }
    }
    return result;
}

PhoneNumber.prototype.countryCode = function (newNum) {
    if (newNum.length === 11 && newNum.charAt(0) === '1') {
        return newNum.slice(1, 11);
    } else {
        return '0000000000';
    }
}


PhoneNumber.prototype.areaCode = function () {
    this.number();
    return this.finalNumber.slice(0, 3);
}

PhoneNumber.prototype.toString = function () {
    this.number();
    var threeDigit = this.finalNumber.slice(3, 6);
    var fourDigit = this.finalNumber.slice(6, 10);
    return '(' + this.areaCode() + ') ' + threeDigit + '-' + fourDigit;
}

module.exports = PhoneNumber;