import { unpackMeta } from '@unhead/shared';
import { ref, watchEffect, watch, getCurrentInstance } from 'vue';
import { i as Ft, e as Nt } from './server.mjs';

function l(t2, e2 = {}) {
  const l2 = e2.head || Ft();
  if (l2) return l2.ssr ? l2.push(t2, e2) : function(t3, e3, o2 = {}) {
    const l3 = ref(false), i2 = ref({});
    watchEffect(() => {
      i2.value = l3.value ? {} : Nt(e3);
    });
    const f = t3.push(i2.value, o2);
    return watch(i2, (t4) => {
      f.patch(t4);
    }), getCurrentInstance(), f;
  }(l2, t2, e2);
}
function i(t2, a2) {
  const { title: r2, titleTemplate: n2, ...s2 } = t2;
  return l({ title: r2, titleTemplate: n2, _flatMeta: s2 }, { ...a2, transform(t3) {
    const a3 = unpackMeta({ ...t3._flatMeta });
    return delete t3._flatMeta, { ...t3, meta: a3 };
  } });
}

export { i, l };
