
function trigger(test){
    // Only activate and bucket users into the experiment if they come from Google
    const isGroupA = Math.random() < 0.8;
    // (Runs as soon as the container is loaded)
    if (isGroupA) test.activate();
}
