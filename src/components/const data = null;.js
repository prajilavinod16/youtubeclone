const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs"
);
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "239b2ece02mshfbebfca94ead406p14efbcjsn2db7ec3f8525"
);
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);
