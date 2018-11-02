export function scrollInitJslogic () {
    var GV = $('.scroll-container');
    if ( GV.length ){
        GV.each(function(){
            $(this).scrollbar();
        })
    }
}
