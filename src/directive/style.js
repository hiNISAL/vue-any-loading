export default `
.vue-any-loading{position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;background:rgba(255,255,255,.9);opacity:0;transition:all .3s;display:none}
.vue-any-loading .vue-any-loading-loader:after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:30px;height:30px;border:5px solid transparent;border-bottom:5px solid #2d8ce6;border-radius:100%;-webkit-animation:VueAnyLoadingAnimate 1s linear infinite;animation:VueAnyLoadingAnimate 1s linear infinite}
@-webkit-keyframes VueAnyLoadingAnimate{from{-webkit-transform:rotate(0);transform:rotate(0)}
to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}
}
@keyframes VueAnyLoadingAnimate{from{-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0)}
to{-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}
}
`;