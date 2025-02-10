const o = (o2, t) => {
  const c = o2.__vccOpts || o2;
  for (const [s, n] of t) c[s] = n;
  return c;
};

export { o };
