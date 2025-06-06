import Home from "./pages/Home";
import List from "./pages/List";
import Item from "./pages/Item";
import Cardapio from "./pages/Cardapio"
import ItemCardapio from "./pages/ItemCardapio";


import {HashRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/item/:id" element={<Item />} />
                <Route path="/cardapio" element={<Cardapio />}/>
                <Route path="/product/:id" element={<ItemCardapio />} />
            </Routes>    
        </HashRouter>

    )
}

export default Router;