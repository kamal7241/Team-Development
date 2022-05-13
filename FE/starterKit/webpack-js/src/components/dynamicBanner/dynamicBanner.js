export const dynamicBanner = ( ()=> {
 return import( /* webpackChunkName: "dynamics/dynamicBanner" */"../banner/banner.js")
.then(({ banner })=> {
    return banner;
});
})();