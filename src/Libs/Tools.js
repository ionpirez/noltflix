export function Search(title){
  const VAR_URL = "https://netflixroulette.net/api/api.php?title="+title.replace(/\s/ig, "%20")+"&type=json"
  var myInit = { method: 'GET',
                 cache: 'default' };
  var myRequest = new Request(VAR_URL, myInit);
  return fetch(myRequest)
}
export function Add(obj){
  const VAR_URL = "https://polar-forest-35896.herokuapp.com"
  var myInit = { method: 'POST',
                 cache: 'default',
                 headers: {
                   'Content-type': 'application/json'
                },
                 body: JSON.stringify(obj) };
  var myRequest = new Request(VAR_URL, myInit);
  return fetch(myRequest)
}

export function Get(){
  const VAR_URL = "https://polar-forest-35896.herokuapp.com"
  var myInit = { method: 'GET',
                 cache: 'default' };
  var myRequest = new Request(VAR_URL, myInit);
  return fetch(myRequest)
}
export function Delete(id){
  const show_id = id.id
  const VAR_URL = "https://polar-forest-35896.herokuapp.com/"+show_id
  var myInit = { method: 'Delete',
                 cache: 'default' };
  var myRequest = new Request(VAR_URL, myInit);
  return fetch(myRequest)
}
