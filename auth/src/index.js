import { createBrowserHistory } from 'history'

import('./bootstrap').then(({ mount }) => {
    if (process.env.NODE_ENV === "development") {
        mount(document.querySelector("#_auth-dev-root"), {
            defaultHistory: createBrowserHistory()
        });
    }
})
