$(document).ready(function(){

  	//Base url from facebook debugger tool
  	//More information in https://developers.facebook.com/blog/post/612/ Updating Objects
    urlFacebook = "https://graph.facebook.com/?id=";

    function linkScrapper(links){

      for(var link in links){

        var url = links[link].url;

        console.log("Scrapping URL... "+url);
        
        $(".console-text").html("<p>Scrapping Started!...</p>");

        $.post(urlFacebook+url+"&scrape=true", function(){
            $(".url-scrapped").html("<h3>Hang in there! Process may take some time...</h3>");
             console.log("URL scrapped");
        })
            .done(function() {
                $(".process-done").html("<strong>All URLs scrapped!</strong>");
            })

            .fail(function(){
                $(".process-done").html("<strong>Upps! Something went wrong! :(</strong>");
            })

      //end for in
      }

    //end function linkScrapper()
    }

    //Read json containing all links
    //If the json file has more fields, make sure the links are contained in
    //a 'url' field.
    $("#start").click(function(){

      //enlaces.json is the json file containing all urs.
      //you can replace for your own file or rename yours to enlaces.json
      $.getJSON("enlaces.json", function(data){

        //logging to verify data is loading.
        console.log(data);

        //pass array containing all links to function linkScrapper()
        linkScrapper(data);

      });

    });



  });