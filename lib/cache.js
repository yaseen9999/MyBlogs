// cache.js
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 }); // Cache data for 1 hour

export default cache;
