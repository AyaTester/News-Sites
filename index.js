//varabiles
const generalBtn =document.getElementById("general");
const businessBtn =document.getElementById("business");
const sportsBtn =document.getElementById("sports");
const technologyBtn =document.getElementById("technology");
const EnterimentBtn =document.getElementById("Enteriment");
const searchBtn =document.getElementById("searchBtn");
const newQuaryBtn =document.getElementById("newQuary");
const newsTypeBtn =document.getElementById("newsType");
const newsdetailsBtn =document.getElementById("newsdetails");
//Array
var newsDataArr =[];
//APIs
const API_KEY = "026415aeecb04278b12a7c584e9fb787";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload=function(){
    newsTypeBtn.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
}
generalBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>General</h4>";
       fetchGeneralNews();
});
businessBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>Buisness</h4>";
    fetchBusinessNews();

});
sportsBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});
technologyBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>technology</h4>";
    fetchTechnologyNews();
});
EnterimentBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>Enteriment</h4>";
    fetchEnterimentNews();
});
searchBtn.addEventListener("click",function(){
    newsTypeBtn.innerHTML="<h4>Search : "+newQuaryBtn.value+"</h4>";
    fetchQueryNews();
});
const fetchHeadlines = async()=>{
    const response =await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)
    }
    displyNews();
};
const fetchGeneralNews = async()=>{
       const response =await fetch(GENERAL_NEWS+API_KEY);
       newsDataArr=[];
       if(response.status >= 200 &&  response.status <300)
       {
               const myJson = await response.json();
               newsDataArr= myJson.articles;
       }
       else
       {
        //hendels errors
        console.log(response.status, response.statusText)
       }
       displyNews();
};
const fetchBusinessNews = async()=>{
    const response =await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)

    }
    displyNews();
};
const fetchSportsNews = async()=>{
    const response =await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)

    }
    displyNews();
};
const fetchEnterimentNews = async()=>{
    const response =await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            console.log(myJson);
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)

    }
    displyNews();
};
const fetchTechnologyNews = async()=>{
    const response =await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)

    }
    displyNews();
};
const fetchQueryNews = async()=>{
    if(newQuaryBtn.value == null)
       return;
    const response =await fetch(SEARCH_NEWS+encodeURIComponent(newQuaryBtn.value)+"&apikey="+API_KEY);
    newsDataArr=[];
    if(response.status >= 200 &&  response.status <300)
    {
            const myJson = await response.json();
            newsDataArr= myJson.articles;
    }
    else
    {
     //hendels errors
     console.log(response.status, response.statusText)

    }
    displyNews();
};

function displyNews() {
    newsdetailsBtn.innerHTML = "";
     if(newsDataArr.length==0)
     {
        newsdetailsBtn.innerHTML ="<h5>No Data Found.</h5>";
        return;
     }
     newsDataArr.forEach(news => {
            var data = news.publishedAt.split("T");
            var col = document.createElement('div');
            col.className= "col-sm-12 col-md-4 col-lg-3 p-2 card";
            var card = document.createElement('div');
            card.className= "p-2";
            var image = document.createElement('img');
            image.setAttribute("height","matchparnt");
            image.setAttribute("width" , "100%");
            image.src=news.urlToImage;
            var cardBody = document.createElement('div');
            var newsHanding = document.createElement('h5');
            newsHanding.className="card-title";
            newsHanding.innerHTML=news.title;
            var dataHeading = document.createElement('h6');
            dataHeading.className="text-primary";
            dataHeading.innerHTML=data[0];
            var discripion = document.createElement('p');
            discripion.className ="text-muted";
            discripion.innerHTML= news.discripion;
            var link = document.createElement('a');
            link.className="btn btn-dark";
            link.setAttribute("target","_blank");
            link.href=news.url;
            link.innerHTML="Read More";
            cardBody.appendChild(newsHanding);
            cardBody.appendChild(dataHeading);
            cardBody.appendChild(discripion);
            cardBody.appendChild(link);
            card.appendChild(image);
            card.appendChild(cardBody);
            col.appendChild(card);
            newsdetailsBtn.appendChild(col);
     });
};