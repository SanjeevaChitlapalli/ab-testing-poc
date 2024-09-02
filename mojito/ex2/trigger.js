function trigger(test){
    // Activate the experiment for all users
    test.activate();

    // OR activate based on a query parameter (e.g., ?experiment=ex2)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('experiment') === 'ex2') {
        test.activate();
    }
}