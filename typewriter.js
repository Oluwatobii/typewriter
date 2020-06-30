const sentence = "hello there from lighthouse labs";

let count = 0;

for (let char of sentence) {
  count++;
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * count);
}
setTimeout(() => {
  process.stdout.write("\n");
}, 50 * count);
