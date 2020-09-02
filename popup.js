document.addEventListener('DOMContentLoaded', function () {

    var flyForWaffleAir = document.getElementById('flyForWaffleAir');

    chrome.storage.sync.get(['FlyForWaffleAir'], function(result) {
        if (result.FlyForWaffleAir==="true") {
            flyForWaffleAir.innerText="Turn On";
        } else {
            flyForWaffleAir.innerText="Turn Off";
        }
    });

    flyForWaffleAir.addEventListener('click', function() {
        chrome.storage.sync.get(['FlyForWaffleAir'], function(result) {
            if (result.FlyForWaffleAir==="true") {
                chrome.storage.sync.set({'FlyForWaffleAir': 'false'}, function() {});
                flyForWaffleAir.innerText="Turn Off";
            } else {
                chrome.storage.sync.set({'FlyForWaffleAir': 'true'}, function() {});
                flyForWaffleAir.innerText="Turn On";
            }
        });
    });
});