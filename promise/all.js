// résolut la promesse après une délai aléatoire
const asyncRandom = () => new Promise((resolve) => {
    const timing = Math.floor(Math.random() * 2000);
    setTimeout(() => resolve (`résolue en ${timing}ms`), timing);
});

asyncRandom().then(messages => console.log(messages));

const all = Promise.all([
    asyncRandom(),
    asyncRandom(),
    asyncRandom(),]
);

all.then(messages => console.log(messages));