


const request = require('request');


console.log('index.js is alive and running')

$('document').ready(() => {
    //remember, 10 is the magic number, there are 10 indexes in the directory
    //10 quotes in each one. 

    //generates random quotes and modifies h1 tag
    function generateQuote(){
        let randomPage = Math.floor(Math.random() * 10);

        let quoteUrl = "http://quotes.toscrape.com/";
        quoteUrl = quoteUrl + "/page/" + randomPage;
    
        const MAX_CHAR = 256;
    
        $.get(quoteUrl, function(response) {
            let quotes = $(response).find(".quote");
            let qs = [];
            quotes.each(function(i, quote){
                let text = $(quote).find('.text').html();
                let author = $(quote).find('.author').html();
                qs.push({"writer": author, "quote": text});
            })

            qs = qs.filter(function(entries){
                if (entries.quote.length <= MAX_CHAR)
                    return entries;
            })

            console.log(qs);
            console.log(qs.length);
            for (let i = 0; i < qs.length; i++) {
                let qsIndex = Math.floor(Math.random() * (qs.length - 1) + 0);
                console.log(qsIndex);
            }
            let qsIndex = Math.floor(Math.random() * (qs.length - 1) + 0);

            let randomQuote = qs[qsIndex].quote;
            let randomAuthor = "- " + qs[qsIndex].writer;

            $('h1').text(randomQuote);
            $('p').text(randomAuthor);
        
        })
    }

    generateQuote();

    myUrl = 'https://www.picsum.photos/1000/1000?blur=2'
    function changeUrl(){
        let currTime = new Date().getTime()
        let newUrl = myUrl + "?" + currTime
        generateQuote();
        $('.jumbotron').css('background-image', `url(${newUrl})`).fadeIn(1000)
    }

    $('button').on('click', () => {
        $('.jumbotron').stop().fadeOut(1000, changeUrl)

    })
})