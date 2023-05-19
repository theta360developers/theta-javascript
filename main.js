import { info } from './fake-theta/protocols/info.js';
import {state} from './fake-theta/protocols/state.js';


if (process.argv.length === 2) {
    console.error('expected one argument');
    process.exit(1);
} else if (process.argv.length > 3) {
    console.error('only support single argument');
    process.exit(1);
}

else if (process.argv[2] === 'info') {
    console.log('attempting to run info');
    info();
} 
else if (process.argv[2] === 'state') {
    console.log('attempting to run state');
    state();
}
else {
    console.error('command not supported');
    console.log('supported commands: info, state')
}