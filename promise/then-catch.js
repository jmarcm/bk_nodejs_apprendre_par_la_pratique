const oddTime = (date) => {
    return new Promise((resolve, reject) => {
        parseInt(date.getTime() / 1000) % 2
            ? resolve("Le nombre de secondes est impair")
            : reject("Le nombre de secondes n'est pas impair");
    });
};

const now = new Date();

oddTime(now).then(
    (msg) => console.log(msg),
    (msg) => console.error("error: " + msg)
);

const delay = new Date(now.getTime() + 1000);
oddTime(delay)
    .then((msg) => console.log(`success: ${msg}`))
    .catch((msg) => console.error(msg));
