// mojito/mytest/shared.js

function shared() {
    return {
        sharedFn: function() {
            console.log("Shared function executed");
        },
        sharedVal: 'Shared value'
    };
}
