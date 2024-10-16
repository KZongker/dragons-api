import { Pool } from './repos/Pool';
import { init } from './server';
// const port = process.env.SERVER_PORT;
const port = 8080;

Pool.initPool();
init().then(app => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
});