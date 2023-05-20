import { roadmap } from './things_to_learn.js';
import {writeJsonFile, writeJsonFileSync} from 'write-json-file';

await writeJsonFile('roadmap.json', {roadmap});
//console.table(roadmap);
