import LoadingStyle from './style';

/**
 * loaidng信息
 */
let map = {};

/**
 * 创建loading元素
 */
const createLoading = () => {
  let loadingEl = document.createElement('div');

  let id = Math.random().toString(16).substring(2);

  loadingEl.className = `vue-any-loading ${ id }`;
  loadingEl.innerHTML = '<div class="vue-any-loading-loader"></div>';

  map[id] = {
    id,
    loadingEl
  };

  return [loadingEl, id];
}

/**
 * 获取css属性
 * @param {*} obj 
 * @param {*} attr 
 */
const getStyle = (obj, attr) => {
  if (obj.currentStyle) return obj.currentStyle[attr]
  return getComputedStyle(obj, null)[attr];
}

/**
 * 设定定位 如果没设定则相对定位 设定了则不管
 * @param {*} el 
 */
const setPosition = (el) => {
  let elPosition = getStyle(el, 'position');

  if (!['absolute', 'fixed', 'relative'].includes(elPosition)) {
    el.style.position = 'relative';
  }
}

/**
 * 隐藏loading
 * @param {*} el 
 */
const removeLoading = el => {
  let loadingEl = el.querySelector('.vue-any-loading');

  let id = loadingEl.className.split(' ')[1];

  loadingEl.style.opacity = '0';
  map[id].timer = setTimeout(() => {
    loadingEl.style.display = 'none';
  }, 300);
}

/**
 * 显示loading
 * @param {*} el 
 */
const setLoading = el => {
  let loadingEl = el.querySelector('.vue-any-loading');

  let id = loadingEl.className.split(' ')[1];

  if (map[id].timer) clearTimeout(map[id].timer);

  loadingEl.style.display = 'block';

  setTimeout(() => {
    loadingEl.style.opacity = '1';
  }, 30);
}

const setLoadingState = (el, isSet) => {
  isSet ? setLoading(el) : removeLoading(el);
}

/**
 * 元素被删除时 对应的删除映射 关系
 * @param {*} el 
 */
const destoryLoading = el => {
  let loadingEl = el.querySelector('.vue-any-loading');

  let id = loadingEl.className.split(' ')[1];

  delete map[id];
}

const createLoaindgCSS = () => {
  if (document.querySelector('.vue-any-loading-style')) return;

  let style = document.createElement('style'); 
  style.type = 'text/css'; 
  style.innerHTML=LoadingStyle;
  style.className = 'vue-any-loading-style';
  document.querySelector('head').appendChild(style);
}

export const vLoading = {
  inserted(el, binding) {
    let [ loadingEl, id ] = createLoading();
    setPosition(el);

    el.appendChild(loadingEl);
    if (!binding.value) return;

    setLoadingState(el, binding.value);
  },
  update(el, binding) {
    setLoadingState(el, binding.value);
  },
  unbind(el) {
    destoryLoading(el);
  },
  bind() {
    createLoaindgCSS();
  }
};
