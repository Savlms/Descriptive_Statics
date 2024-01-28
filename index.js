class Statistics {

    //Measures of Central Tendency
    static mean(values) {
        const n = values.length;
        let sum = 0;
        values.forEach(value => {
            sum += value;
        });
        return (sum / n);
    }

    static median(values) {
        const sortedValues = values.sort((a, b) => a-b);
        const n = values.length;
        if ((n % 2) === 1) {
            return sortedValues[(n + 1) / 2];
        } else {
            return (sortedValues[n/2] + sortedValues[n/2]) / 2;
        }
    }

    static mode(values) {
        let currentValue;
        let highestValue;
        let count = 0;
        let highestStreak = 0;
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < values.length; j++) {
                if (values[i] === values[j]) {
                    currentValue = values[i];
                    count ++;
                }
            }
            if (highestStreak < count) {
                highestStreak = count;
                highestValue = currentValue;
            }
            count = 0;
        }
        return highestValue;
    }

    //Measures of Dispersion
static range(values) {
    const sortedValues = values.sort((a, b) => a-b);
    return (sortedValues[sortedValues.length - 1] - sortedValues[0]);
}

static variance(values) {
    const meanValue = Statistics.mean(values);
    let difference = [];
    values.forEach(value => {
        difference.push(Math.pow((value - meanValue), 2));
    });
    return (Statistics.mean(difference)).toFixed(2);
}

static standardDeviation(values) {
    return (Math.sqrt(Statistics.variance(values))).toFixed(2);
}

static absoluteDeviation(values) {
    const meanValue = Statistics.mean(values);
    let difference = [];
    values.forEach(value => {
        difference.push(Math.abs(value - meanValue));
    });
    return Statistics.mean(difference).toFixed(2);
}

static quartileDeviation(values) {
    const sortedValues = values.sort((a, b) => a-b);
    const n = values.length;
    const q1 = (1/4) * (n + 1);
    const q2 = (2/4) * (n + 1);
    const q3 = (3/4) * (n + 1);
    const wholeNum1 = Math.floor(q1);
    const wholeNum2 = Math.floor(q2);
    const wholeNum3 = Math.floor(q3);
    const q1term = sortedValues[wholeNum1 - 1] + ((q1 - wholeNum1) * (sortedValues[wholeNum1] - sortedValues[wholeNum1 - 1]));
    const q2term = sortedValues[wholeNum1 - 1] + ((q2 - wholeNum1) * (sortedValues[wholeNum1] - sortedValues[wholeNum1 - 1]));
    const q3term = sortedValues[wholeNum3 - 1] + ((q3 - wholeNum3) * (sortedValues[wholeNum3] - sortedValues[wholeNum3 - 1]));
    return ((q3term - q1term) / 2).toFixed(2);
    }

}