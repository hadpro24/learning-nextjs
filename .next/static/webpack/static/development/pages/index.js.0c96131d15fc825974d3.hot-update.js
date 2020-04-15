webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/harouna/codes/dev/learn/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import fetch from "isomorphic-unfetch";




function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useRouter = next_router__WEBPACK_IMPORTED_MODULE_5___default()(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])("/api/randomQuote".concat(query.author ? '?author=' + query.author : ''), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch quote.';
  return __jsx("main", {
    className: "jsx-1236022937" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 18
    }
  }, " - ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcm91bmEvY29kZXMvZGV2L2xlYXJuL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQixBQUdxQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXRCLFVBWEEsT0FNQSIsImZpbGUiOiIvaG9tZS9oYXJvdW5hL2NvZGVzL2Rldi9sZWFybi9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKXtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpe1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nK3F1ZXJ5LmF1dGhvciA6ICcnfWAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XG5cbiAgaWYoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuICBpZihlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHF1b3RlLic7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9kaXY+XG4gICAgICB7YXV0aG9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPiAtIHthdXRob3J9PC9zcGFuPn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnF1b3RlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuXG4gICk7XG59XG5cbi8vIGZ1bmN0aW9uIGdldFBvc3RzKCl7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZCA6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdXG4vLyB9XG4vL1xuLy8gY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbi8vICAgPGxpIGtleT17cG9zdC5pZH0+XG4vLyAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICBsaXtcbi8vICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4vLyAgICAgICAgICAgbWFyZ2luOjVweCAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGF7XG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4vLyAgICAgICAgICAgY29sb3I6Ymx1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBhOmhvdmVye1xuLy8gICAgICAgICAgIG9wYWNpdHk6MC42O1xuLy8gICAgICAgICB9XG4vLyAgICAgICBgfTwvc3R5bGU+XG4vLyAgIDwvbGk+XG4vLyApXG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpe1xuLy8gICByZXR1cm4gKFxuLy8gICAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4vLyAgICAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAgICAgaDEsIGF7XG4vLyAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgdWx7XG4vLyAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9MYXlvdXQ+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgPC9saT5cbi8vXG4vLyAgICAgICAgICkpfVxuLy8gICAgIDwvTGF5b3V0PlxuLy8gKTtcbi8vXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhgU293IGRhdGEgZmV0Y2ggY291bnQuICR7ZGF0YS5sZW5ndGh9YCk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4vLyAgICAgfTtcbi8vIH1cbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/harouna/codes/dev/learn/hello-next/pages/index.js */"));
} // function getPosts(){
//   return [
//     { id : 'hello-nextjs', title: 'Hello Next.js'},
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ]
// }
//
// const PostLink = ({ post }) => (
//   <li key={post.id}>
//       <Link href="/p/[id]" as={`/p/${post.id}`}>
//             <a>{post.title}</a>
//       </Link>
//       <style jsx>{`
//         li{
//           list-style:none;
//           margin:5px 0;
//         }
//         a{
//           text-decoration:none;
//           color:blue;
//         }
//         a:hover{
//           opacity:0.6;
//         }
//       `}</style>
//   </li>
// )
//
// export default function Blog(){
//   return (
//       <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             {getPosts().map(post => (
//               <PostLink key={post.id} post={post} />
//             ))}
//         </ul>
//         <style jsx>{`
//             h1, a{
//               font-family: 'Arial';
//             }
//             ul{
//               padding:0;
//             }
//         `}</style>
//       </Layout>
//   );
// }
// const Index = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         {props.shows.map(show => (
//             <li key={show.id}>
//                 <Link href="/p/[id]" as={`/p/${show.id}`}>
//                     <a>{show.name}</a>
//                 </Link>
//             </li>
//
//         ))}
//     </Layout>
// );
//
// Index.getInitialProps = async function(){
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//
//     console.log(`Sow data fetch count. ${data.length}`);
//     return {
//         shows: data.map(entry => entry.show)
//     };
// }
//
// export default Index;

/***/ })

})
//# sourceMappingURL=index.js.0c96131d15fc825974d3.hot-update.js.map