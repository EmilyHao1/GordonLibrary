function onSearch(){
  console.log("Getting movies...");
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert("XMLHttp failure");
    return false;
  }
  httpRequest.onreadystatechange = function () {
    handleRes(httpRequest);
  }

  var name = document.getElementById("search_name").value;
  var uri = '?query='+ name;

  httpRequest.open('GET',uri ,true);
  httpRequest.send();

  var state=({
    req: httpRequest,
    title: ''
  });
}
