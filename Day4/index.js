import React from 'react';
import ReactDOM from 'react-dom/client';

// const hello1=React.createElement('h1',{},"H1 tag!");
// const hello2=React.createElement('h2',{},"H2 tag!");
// const hello3=React.createElement('h3',{},"H3 tag!");



// const container=React.createElement('div',{
//     className:"title"
// },[hello1,hello2,hello3])


// const h1=<h1 id="title">
//     H1 tag
// </h1>
// const h2=<h2>H2 tag</h2>
// const h3=<h3>H3 tag</h3>


// const Container = ()=>{
//     return <div className='title'>
//         {h1}{h2}{h3}

//          hello </div>;
// }

const H1tag = () => {
    return (<h1 id="title" className='h3'>
        This is a H1 tag..!!
    </h1>);
}
const H2tag = () => {
    return (
        <h2 className='h2'>This is a h2 tag..!!</h2>
    )
}
const H3tag = () => {
    return (
        <h3 className='h3'>This is a h3 tag..!!</h3>
    )
}


const Container = () => {
    return <div className='title'>
        <H1tag />
        <H2tag />
        <H3tag />
    </div>;
}



const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(container);
root.render(<Container />);