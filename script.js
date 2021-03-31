function checkNumber(number) {

    if (number === undefined || number === 0 || isNaN(number)) {
        return 'Введите число больше 0';
    }

    if (number >= 1000) {
        return 'Ошибка:число больше или равно 1000';
    } else {
        if (number % 2 === 0) {
            return "Чётное";
        } else {
            return "Не чётное";
        }

    }

}