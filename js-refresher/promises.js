{
    const fetchData = callback => {
        setTimeout(() => {
            callback('Done!');
        }, 1500);
    };

    setTimeout(() => {
        console.log('Timer is done!');

        fetchData(text => {
            console.log(text);
        });
    }, 2000);

    console.log('Hello!');
    console.log('Hi!');
}

{
    const fetchData = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Done!');
            }, 1500);
        });

        return promise;
    };

    setTimeout(() => {
        console.log('Timer is done!');

        fetchData()
            .then(text1 => {
                console.log(text1);

                return fetchData()
            })
            .then(text2 => {
                console.log(text2);
            });;
    }, 2000);

    console.log('Hello!');
    console.log('Hi!');
}
