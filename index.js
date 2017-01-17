e = (a = {}) => ({ on(t, x) { a[t] ? a[t].push(x) : a[t] = [x] }, off(t, x) { a[t] = a[t].filter(f => f != x) }, emit(t, x) { a[t].map(f => f(x)) }, })
