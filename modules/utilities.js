const formatNumber = number => {
    const splitNumber = number.toString().split('.');

    const preDot = Array.from(splitNumber[0])

    const postDot = (() => {
        return splitNumber.length > 1 ? splitNumber[1] = '.' + (
            splitNumber[1].length == 1 ? splitNumber[1] + '0' : splitNumber[1]
            ) : ''
    })();

    let idxCurrent = preDot.length - 1;

    while (idxCurrent > 2) {
        preDot.splice(idxCurrent - 2, 0, ',');
        idxCurrent -= 3;
    }

    return (preDot.join('') + postDot);
}

export { formatNumber }