/**
 * Created by Anna on 12.09.2017.
 */
console.log('Hello World');

const name = process.argv[2];
console.log(`Hi ${name}!`);

process.argv.forEach((value)=> {
    console.log(`${value}`);
});
