const thumbnailStorageBase = 'https://codetricity.github.io/fake-storage/files/100RICOH/thumb/';
const filename = 'R0010003.JPG';
const url = thumbnailStorageBase + filename;

import {get} from 'https'
import { createWriteStream } from 'fs';

get(url, resp => resp.pipe(createWriteStream(filename)));