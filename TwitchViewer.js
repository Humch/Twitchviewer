var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function successCallBack(data) {
    console.log(data.display_name);
    console.log(data);
}

function getStreamer(user) {
    var url = "https://wind-bow.gomix.me/twitch-api/users/" + user + "?callback=?";
    $.ajax( {
        url : url,
        dataType : 'jsonp',
        type : 'GET',
        success : function(data) {
            successCallBack(data);
        }
    });
}

function displayStreamers(streamers) {
    streamers.forEach(function(element) {
        getStreamer(element);

    });
}