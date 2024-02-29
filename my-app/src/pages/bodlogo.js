const a = [1, 8, 6, 2, 5, 4, 8, 3, 7];
s = [];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] < a[j]) {
      s.push(a[i] * (j - i));
    } else {
      s.push(a[j] * (j - i));
    }
  }
}
let max = 0;
for (let h = 0; h < s.length; h++) {
  if (max < s[h]) {
    max = s[h];
  }
}
// console.log("max utga" + max);
