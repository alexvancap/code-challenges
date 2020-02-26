function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

console.log(domainName("http://google.com"), "google")
console.log(domainName("http://google.co.jp"), "google")
console.log(domainName("www.xakep.ru"), "xakep")
console.log(domainName("https://youtube.com"), "youtube")