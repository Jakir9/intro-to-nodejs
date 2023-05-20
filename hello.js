import {roadmap} from './things_to_learn.js';
import pr from 'my-prime';
import {writeJsonFile, writeJsonFileSync} from 'write-json-file';

console.table(roadmap);

console.log('Prime numbers: ' )

console.log(pr.isPrime(5));

for(let i=0;i<roadmap.length;i++){
    await writeJsonFile(`${roadmap[i].topic}.json`,roadmap[i] );
}



//console.log(`Random number: ${rand} is a Prime number: ${pr.isPrime (rand)}`);



for (let index = 0; index < 10; index++) {
    let rand = Math.floor(Math.random() * 100);
    
    if (pr.isPrime (rand)) {
        writeJsonFile(`${rand}`, rand);
        console.log(`${rand} is a prime number`)
    } else {
        console.log(`${rand} is not a prime number`)
    }
}