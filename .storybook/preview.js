if (module.hot) {
    module.hot.accept(req.id, () => {
        const currentLocationHref = window.location.href;
        window.history.pushState(null, null, currentLocationHref);
        window.location.reload();
    });
}