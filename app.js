// Group Project-1 - Survivor: Bootcamp Edition
// Members: David Vega, Mandolin Foster, Adam Toomey, Jamie Morris

// Document ready for Jquery
$(document).ready(function () {
    // API Key for Link Preview 3rd party API
    var apiKey = "5dbf122089ddb1d926963e42677ead3e34c4cb2860623";

    // Start Click for JQuery
    $(".jQuery").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://jquery.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var h3 = $("<h3>");
                var p = $("<p>");
                var img = $("<img>");
                var a = $("<a>");
                var div = $("<div>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                h3.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> JQuery is a Javascript library that implements the same functionality with abbreviated, easily readable code.</p>`);
                test.append(a.attr("href", result.url).text(result.url));
                a.attr("target", "_blank");
                test.append(div).addClass("img");
                $(".img").append(img.attr("src", "https://miro.medium.com/max/1200/0*s1Goua9K1MuNuapv.jpg"));

            }
        });
    });
    // end click

    // Start Click for Moment JS
    $(".momentJS").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://momentjs.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var h3 = $("<h3>");
                var p = $("<p>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> Moment JS is especially helpful in provided multiple formats for time and date. </p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                var $imgTag = $("<img>").attr("src", "https://miro.medium.com/max/1110/1*IBE92hS18PR9WEhMB3xz1w.jpeg");
                test.append($imgTag);

            }
        });
    });
    // end click

    // Start Click for Bootstrap
    $(".bootStrap").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://getbootstrap.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var h3 = $("<h3>");
                var p = $("<p>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> Bootstrap offers comprehensive CSS layouts for HTML documents. This is easy to implement using their CDN and documentation.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);

            }
        });
    });
    // end click

    // Start Click for Git Hub
    $(".gitHub").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://github.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var p = $("<p>");
                var h3 = $("<h3>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append("GitHub: " + result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> GitHub is a fantastic website for version control of your project. They also offer an IO link for live project demonstration.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);

            }
        });
    });
    // end click

    // Start Click for Mozilla Developer Network
    $(".mdnWebDocs").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://developer.mozilla.org/en-US/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var p = $("<p>");
                var h3 = $("<h3>");
                var div = $("<div>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> Mozilla Developer Network offers comprehensive documentation on webdevelopment languages, including HTML, CSS and Javascript.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                test.append(div).addClass("img");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);

            }
        });
    });
    // end click

    // Start Click for Adobe
    $(".adobe").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://www.adobe.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var p = $("<p>");
                var h3 = $("<h3>");
                var div = $("<div>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> Adobe offers beautiful stock photos and photo editing capabilities.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                test.append(div).addClass("img");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);

            }
        });
    });
    // end click

    // Start Click for Stack Overflow
    $(".stackOverflow").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://stackoverflow.com/",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var p = $("<p>");
                var h3 = $("<h3>");
                var div = $("<div>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> Code not working? Take your question to Stack Overflow, a helpful forum where other developers can review your code.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                test.append(div).addClass("img");
                var $imgTag = $("<img>").attr("src", result.image);
                test.append($imgTag);

            }
        });
    });
    // end click


    // Start Click for w3Schools
    $(".w3Schools").on("click", function (properties) {

        // Ajax call
        $.ajax({
            url: "https://api.linkpreview.net?key=" + apiKey + "&q=https://www.w3schools.com",
            success: function (result) {
                console.log(result);
                // Appends response data to HMTL page 
                var p = $("<p>");
                var h3 = $("<h3>");
                var div = $("<div>");
                var test = $(".testFront");
                test.empty();
                test.append(h3);
                h3.append(result.title);
                test.append(p.text(result.description));
                test.append(`<p> Why we recommend it: </p> <p> W3Schools is a fantanstic resource for learning to code from the ground up. We particularly like the Try It Yourself feature that allows you to make live code edits.</p>`);
                var $aTag = $("<a>").attr("href", result.url).text(result.url);
                test.append($aTag);
                $("a").attr("target", "_blank");
                test.append(div).addClass("img");
                var $imgTag = $("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png");
                test.append($imgTag);

            }
        })
    })
    // end click

})
