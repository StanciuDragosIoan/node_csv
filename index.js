
// const nodemon = require('nodemon');


const addresses = [
    `Me & You
    100 Blue Hollow
    Springfield, Virginia 22152`,

    `Me & You
    100 Blue Hollow
    Springfield, Virginia 22152`,

    `Me & You
    100 Blue Hollow

    Springfield, Virginia 22152`,

    `Me & You
    100 Blue Hollow
    Springfield, North Dakota 22152`

];

// console.log(
//     convertToCsv(convertToNamedParts(`Me & You
//     100 Blue Hollow,
//     3 room flat
//     Springfield, Virginia 22152`))
// );

function convertToNamedParts(input){
    return input.split('\n').reduce( (accumulator, line, index, fullArray) => {

        const isLastLine = index + 1 === fullArray.length;

        if(index === 0) {
            accumulator['Name'] = line;
        } else if(isLastLine){
            const [full, city, state, zip] = /(.+), (.+) (\d{5})/gm.exec(line);

            //console.log(result);
            //to do
            // const [city, rest] = line.split(', ');
            // const [state, zip] = rest.split(' ');

            accumulator['City'] = city.trim();
            accumulator['State'] = state.trim();
            accumulator['Zip'] = zip.trim()

   
        } else if (index === 1) {
            accumulator['Street1'] = line;
        } else if(index === 2){
            accumulator['Street2'] = line;
        }
       
        //console.log(line)

        return accumulator;
    }, {});
}

 


function convertToCsv(obj){
    
    //sollution 1 less flexible
    //return `Name: ${obj['Name']}, Street1: ${obj['Street1']}, Street2: ${obj['Street2']}, City: ${obj['City']}, State: ${obj['State']}, Zip: ${obj['Zip']}`;



    //sollution 2
    return [
        obj['City'],
        obj['State'],
        obj['Zip'],
,        obj['Street1'],
        obj['Street2'],
    ].join(' ; ');
}



// const csv = require('csv-parser');
// const fs = require('fs');

// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });
 

 
