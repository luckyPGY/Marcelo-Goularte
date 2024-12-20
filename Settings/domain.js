   if (window.location.pathname.endsWith('.html')) {
        const newUrl = window.location.pathname.replace(/\.html$/, '');
        window.history.replaceState(null, '', newUrl);
    }
