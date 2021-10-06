const elById = (IdName) => document.getElementById(IdName);

class pub{
    //菜单折叠
    toggleMenu(){
        const isHidden = $('.left-sidebar').hasClass('sidebar-collapsed')
        if(isHidden){
            $('.left-sidebar').removeClass('sidebar-collapsed')
            $('.sidebar-toggle').removeClass('sidebar-toggle-collapsed')
            $('.sidebar-section-label').removeClass('sidebar-collapsed-hidden')
            $('.menu-title').removeClass('sidebar-collapsed-hidden')
        } else {
            $('.left-sidebar').addClass('sidebar-collapsed')
            $('.sidebar-toggle').addClass('sidebar-toggle-collapsed')
            $('.sidebar-section-label').addClass('sidebar-collapsed-hidden')
            $('.menu-title').addClass('sidebar-collapsed-hidden')
        }
    }
}
const pubModel = new pub()

export default pubModel