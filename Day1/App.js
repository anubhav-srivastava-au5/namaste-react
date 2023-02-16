const hello1=React.createElement('h1',{},"Hi! Anubhav");
const hello2=React.createElement('h4',{},"Hi! again!!")
const container=React.createElement('div',{
    id:"container"
},[hello1,hello2])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);