import { createBrowserHistory } from 'history'

import('./bootstrap').then(({ mount }) => {
    if (process.env.NODE_ENV === "development") {
        mount(document.querySelector("#_feed-dev-root"), {
            defaultHistory: createBrowserHistory()
        });
    }
})
