var arr = [
    {
        'guest_type': 'crew',
        'first_name': 'Marco',
        'last_name': 'Burns',
        'guest_booking': {
            'room_no': 'A0073',
            'some_array': [7, 2, 4]
        }
    }, {
        'guest_type': 'guest',
        'first_name': 'John',
        'last_name': 'Doe',
        ' ': {
            'room_no': 'C73',
            'some_array': [
                1,
                3,
                5,
                2,
                4,
                3
            ]
        }
    }, {
        'guest_type': 'guest',
        'first_name': 'Jane',
        'last_name': 'Doe',
        'guest_booking': {
            'room_no': 'C73',
            'some_array': [
                1,
                3,
                5,
                2,
                4,
                3
            ]
        }
    }, {
        'guest_type': 'guest',
        'first_name': 'Albert',
        'last_name': 'Einstein',
        'guest_booking': {
            'room_no': 'B15',
            'some_array': [2, 5, 6, 3]
        }
    }, {
        'guest_type': 'crew',
        'first_name': 'Jack',
        'last_name': 'Daniels',
        'guest_booking': {
            'room_no': 'B15',
            'some_array': [2, 5, 6, 3]
        }
    }, {
        'guest_type': 'guest',
        'first_name': 'Alan',
        'last_name': 'Turing',
        'guest_booking': {
            'room_no': 'B15',
            'some_array': [2, 5, 6, 3]
        }
    }
];

//function to flatten the arrays embedded in each object
const flattenObj = (obj) => {
    let flattenedObj = {};

    for (const i in obj) {
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            const temporal = obj[i];
            for (const j in temporal) {
                flattenedObj[j] = temporal[j];
            }
        } else {
            flattenedObj[i] = obj[i];
        }
    }

    return flattenedObj;
}

//mutate array function
function mutateArray(a) {
    const formattedArray = a.map(item => {
        return flattenObj(item);
    });


    // summing up some_array property
    formattedArray.map(item => {
        let sum = item
            .some_array
            .reduce((a, b) => a + b);

        delete item.some_array;

        item.some_total = sum
    })


    

    return formattedArray;
}

$(document)
    .ready(function () {
        $('#originalArray').html(JSON.stringify(arr, null, 2));
        $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
    });
