{
    // encode uri dan decode uri

    const url = "http://contoh.com/?name=Muhamad Yasir Noval";
    console.info(url);

    const encoded = encodeURI(url);
    console.info(encoded);

    const decoded = decodeURI(encoded);
    console.info(decoded);
}

{
    // econde uri component dan decode uri component

    const value = "Muhamad&Yasir=Noval";
    const url = "http://contoh.com/?name=";
    console.info(url + value);

    const encoded = encodeURIComponent(value);
    console.info(url + encoded);

    const  decoded = decodeURIComponent(encoded);
    console.info(url + decoded);
}