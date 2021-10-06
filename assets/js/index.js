import pubModel from "./public.js";

const elById = (IdName) => document.getElementById(IdName);
const toggle = document.querySelector('.sidebar-toggle');

class newTab {
    initHandlers(){
        toggle.onclick = () => {
            pubModel.toggleMenu()
        }
        // doc.on('click', '.toggle', () => pubModel.toggleMenu())
    }
    init(){
        this.initHandlers()
    }
}
var index  = new newTab;
index.init()

export default index;