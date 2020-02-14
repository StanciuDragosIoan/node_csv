

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



 

let products = [
    
    `
    Product 1 
    Electrical 
    200 
    3 `,

    `Product 2 
    Mechanical 
    200 
    12`,

    `Product 3 
    Electrical 
    200 
    2`,

    `Product 1 
    Electrical 
    200 
    4`
];

output = [];
products.forEach( (product, i) => {
    // console.log(product.split('\n'));
    product = Object.assign({}, products);
    output[`product id ${i}`] = product;
});


iterationOne = Array.from(output['product id 0']);
iterationOne.shift();
// console.log(iterationOne);

// console.log(output);

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out-test.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'surname', title: 'Surname'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
  ]
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

// console.log(data);
// console.log(output);