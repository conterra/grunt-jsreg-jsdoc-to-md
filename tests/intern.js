define({
    loaderOptions: {
        // Packages that should be registered with the loader in each testing environment
        packages: [
            {name: 'root', location: '.'}
        ]
    },
    suites: ['root/tests/test'],
    excludeInstrumentation: /^(?:tests|node_modules)\//
});
