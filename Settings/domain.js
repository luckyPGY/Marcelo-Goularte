   if (window.location.pathname.endsWith('.html')) {
        const newUrl = window.location.pathname.replace(/\.html$/, '');
        window.history.replaceState(null, '', newUrl);
    }
    if (window.location.pathname.endsWith('.htm')) {
        const newUrl = window.location.pathname.replace(/\.htm$/, '');
        window.history.replaceState(null, '', newUrl);
    }

