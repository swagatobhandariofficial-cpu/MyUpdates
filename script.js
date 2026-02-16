import box from "./app.js";
var h1 = React.createElement('h1',null,'My name is Khan')
var h2 = React.createElement('h2',null,'My name is Khan')

var div = React.createElement('div',null,h1,box(),h2)
var root = ReactDOM.createRoot(document.querySelector('.root'))



root.render(div)