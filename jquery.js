jQuery('document').ready(function($){
    var menuBtnright=$('.buttom-right');
        menu=$('.tables .second-table');
        menu1=$('.tables .first-table');
    
        
        menuBtnright.click(function() {
            if(menu.hasClass('show')){
                menu.removeClass ('show')
            }else{
                menu.addClass ('show')
            }
          
        });
        menuBtnright.click(function() {
            if(menu1.hasClass('show')){
                menu1.removeClass ('show')
            }else{
                menu1.addClass ('show')
            }
           
        });

    });