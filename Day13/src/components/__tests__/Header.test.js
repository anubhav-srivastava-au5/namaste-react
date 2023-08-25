import Header from '../Header';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () =>{
    //Load header
    const header = render(<StaticRouter>
    <Provider store={store}> <Header /></Provider>
    </StaticRouter>);
    // console.log(header)
    //check if logo is added

        const logo = header.getAllByTestId("logo");
        // console.log(logo[0])

        expect(logo[0].src).toBe("http://localhost/dummyLogo.jpg")


        //check is online 



})

// test("online status should be green", () =>{
//     const header = render(<StaticRouter>
//         <Provider store={store}> <Header /></Provider>
//         </StaticRouter>);

//     const onlineStatus=header.getByTestId("Online-Status");
//         expect(onlineStatus.innerHTML).toBe("✅")
// })


test("cart should have 0 items initially",()=>{
        const header = render(<StaticRouter>
        <Provider store={store}> <Header /></Provider>
        </StaticRouter>);

        const cart=header.getByTestId("cart");
        console.log(cart)
        expect(cart.innerHTML).toBe("Cart - 0");
})