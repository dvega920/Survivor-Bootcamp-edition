$(document).ready(function () {





    var apiKey = "5dbf122089ddb1d926963e42677ead3e34c4cb2860623";

    // Start Click for JQuery
    $(".jQuery").on("click", function (properties) {
        // Test object 

        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://jquery.com/",
            success: function (result) {
                console.log(result);

                var h3 = $("<h3>");
                var p = $("<p>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append("Title: " + result.title);
                test.append("<p>" + "Description: " + result.description + "</p>");
                test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
            }
        });
    });
    // end click

    // Start Click for Moment JS
    // $(".momentJS").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://momentjs.com/",
    //         success: function (result) {
    //             console.log(result);

    //             var h3 = $("<h3>");
    //             var p = $("<p>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click

    // Start Click for Bootstrap
    // $(".bootStrap").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://getbootstrap.com/",
    //         success: function (result) {
    //             console.log(result);

    //             var h3 = $("<h3>");
    //             var p = $("<p>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click

    // Start Click for Git Hub
    // $(".gitHub").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://github.com/",
    //         success: function (result) {
    //             console.log(result);

    //             var p = $("<p>");
    //             var h3 = $("<h3>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click

    // Start Click for Mozilla Developer Network
    // $(".mdnWebDocs").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://developer.mozilla.org/en-US/",
    //         success: function (result) {
    //             console.log(result);

    //             var h3 = $("<h3>");
    //             var p = $("<p>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click

    // Start Click for Adobe
    // $(".adobe").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://www.adobe.com/",
    //         success: function (result) {
    //             console.log(result);

    //             var h3 = $("<h3>");
    //             var p = $("<p>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click

    // Start Click for Stack Overflow
    // $(".stackOverflow").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://stackoverflow.com/",
    //         success: function (result) {
    //             console.log(result);

    //             var h3 = $("<h3>");
    //             var p = $("<p>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             test.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     });
    // });
    // end click


    // Start Click for w3Schools
    // $(".mdnWebDocs").on("click", function (properties) {
    //     // Test object 

    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://www.w3schools.com",
    //         success: function (result) {
    //             console.log(result);

    //             var p = $("<p>");
    //             var h3 = $("<h3>");
    //             var test = $(".testFront");
    //             test.empty();
    //             test.append(h3);
    //             h3.append("Title: " + result.title);
    //             test.append("<p>" + "Description: " + result.description + "</p>");
    //             test.append("<p>" + "Why we recommend it: " + "</p>" + "<p>" + "W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.");
    //             var $imgTag = $("<img>").attr("src", result.image);
    //             p.append($imgTag);
    //             var $aTag = $("<a>").attr("href", result.url).text(result.url);
    //             test.append($aTag);
    //         }
    //     })
    // })
    // end click

})
