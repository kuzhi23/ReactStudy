let a = { username: "조한준", email: "hanjun1216" };

let b = Object.keys(a).reduce((acc, current) => {
  console.log(acc, "나는,");
  console.log(current);
  acc[current] = "";
  return acc;
}, {});
console.log(b);
