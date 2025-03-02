{
    const date1 = new Date();
    console.info(date1);

    const date2 = new Date(2020, 10, 10);
    console.info(date2);

    const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
    console.info(date3);

    const date4 = new Date(1694050800994);
    console.info(date4);
}

{
    // epoch & unix timestamp

    const date1 = new Date();
    console.info(date1.getTime());

    const date2 = new Date(2020, 10, 10);
    console.info(date2.getTime());

    const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
    console.info(date3.getTime());

    const date4 = new Date(1694050800994);
    console.info(date4.getTime());

    console.info(Date.now());
}

{
    // date parsing

    const time = Date.parse("2020-10-10T08:45:45.123+07:00");
    console.info(time);

    const date = new Date(time);
    console.info(date);
}

{
    // getter dan setter
    const date = new Date();

    console.info(date.getFullYear());
    console.info(date.getMonth());
    console.info(date.getDate());
    console.info(date.getHours());
    console.info(date.getMinutes());
    console.info(date.getSeconds());
    console.info(date.getMilliseconds());
    console.info(date.getTimezoneOffset());
}
