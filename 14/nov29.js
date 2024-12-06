// http://api.weatherapi.com/v1/current.json?q=paris&lang=te


// api token-> authenticated

// lxx->101, 102, 103, 104 ->infomational
//100->continue your request because initial is come to broweser
//101->switching your protocal
//102->request is still in processing


// 2xx->200, 201, 202, 203, 204 ->successful
//200->request successful->response in contains data that we requested 
//201->requested is successful & new resource is created
//202-> it is processsing & requested is successful but it not in final state
//204->there is nodata or content to return


// 3xx-> 300, 301, 302,303,304 ->redirect url
// 301-> the resource that you requested permently moved to new URL
//302 & //307->temp moved to new url(when server down or new server installed) difference is protocal doesnt change
// 302 protocal changes
//304->request turns to cache so it movesto cache memory

// 4xx-> 400, 401,402,403,404 ->access resource not found
//400->bad request,invalid syntax
//401->unauthorised
// 403-> the client is autheticated doesnt have the permision to access the resource.
//404-> the resource is not there is in server/not found
//429-> to many request in a given amount of time(rate limiting //particular amount of requrests)


// 5xx-> 500,501,502,503,504,->server error
//500-> internal server error
//501->no implemented/ server cant implement the function that you requested
//502->server returns invalid responce/bad gateway
//503->server un avaliable due to maintenace
//504->gateway timeout


//it tell you who you are->authentication
//it tell you what you can do?->authorised

const apiKey="3055401b77e64aa592060316242911";
const apiUrl="http://api.weatherapi.com/v1/current.json";
async function fetchWeather(city) {
    try{
        const fullUrl=`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}`;

        const response = await fetch(fullUrl);
        if(!response.ok){
            throw new Error(`Error:${response.status} ${response.statusText}`);
        }
        const data= await response.json();
        console.log("Weather Data:",data);
        return data;
    }catch(error){
        console.error("failed to fetch weather data:",error)
    }
}
fetchWeather("new york");