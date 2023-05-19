import { info } from './fake-theta/protocols/info.js';

if (process.argv.length === 2) {
    console.error('expected one argument');
    process.exit(1);
} else if (process.argv.length > 3) {
    console.error('only support single argument');
    process.exit(1);
}

else if (process.argv[3] === 'info') {
    console.log('attempting to run info');
    info();
} 