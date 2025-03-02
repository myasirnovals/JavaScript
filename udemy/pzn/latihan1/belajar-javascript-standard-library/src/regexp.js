{
    // create regexp

    const regex1 = /yasir/;
    const regex2 = new RegExp("yasir");
    const regex3 = new RegExp(/yasir/);
}

{
    // test regexp

    const name = "Muhamad yasir Noval yasir";
    const regex = /yasir/;

    const result = regex.exec(name);
    console.info(result);

    const test = regex.test(name);
    console.info(test);
}

{
    // regexp modifier

    const name = "muhamad yasir\nMuhamad Noval\nMoh Yasir";
    const regex1 = /^yasir/igm;
    const regex2 = /Muhamad/ig;

    let result;
    while ((result = regex1.exec(name)) !== null) {
        console.info(result);
    }

    while ((result = regex2.exec(name)) !== null) {
        console.info(result);
    }
}

{
    // advance regex

    const regex = /ag[aiueo]s/ig;

    const name = "agas agis agus ages agos gus gus";

    let result;
    while ((result = regex.exec(name)) !== null) {
        console.info(result);
    }
}

{
    const name = "surugus agas agis agus ages agos gus gus";

    console.info(name.match(/ag[aiueo]s/ig));
    console.info(name.search(/ag[aiueo]s/ig));
    console.info(name.replace(/ag[aiueo]s/i, "permen sugus"));
    console.info(name.replaceAll(/ag[aiueo]s/ig, "permen sugus"));
    console.info(name.split(/gas/ig));
}
