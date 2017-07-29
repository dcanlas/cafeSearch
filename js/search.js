$(function() {
    var searchBtn = $("#search-btn");
    var searchInput = $("#search-input");
    var url = "https://api.citygridmedia.com/content/places/v2/search/where"

    searchBtn.click(function() {
        var query = searchInput.val();
        var params = {
            type: "restaurant",
            what: query,
            where: "san jose, ca",
            rpp: 50,
            publisher: "test",
            format: "json"
        };
        $.ajax({
            method: "GET",
            url: url,
            data: params
        }).done(function (data) {
            console.log(data);
        });

    });
});
