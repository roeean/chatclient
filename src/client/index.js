import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket(process.env.SERVER || 'ws://localhost:8000');

export default client;