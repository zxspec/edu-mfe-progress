import('./bootstrap').then(({ mount }) => {
    if (process.env.NODE_ENV === 'development') {
        const devRoot = document.querySelector('#_dashboard-dev-root');
        devRoot && mount(devRoot);
    }
})