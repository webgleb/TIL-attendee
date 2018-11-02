export function scrollResponsiveJslogic () {
    function scrollResponsive(){
        var HEADER = $('header').outerHeight(true),
            WINDOW_HEIGHT = $(window).height(),
            SCROLL_BOX = $('.scroll-wrapper'),
            SCROLL_BOX_G_WRAPPER = SCROLL_BOX.closest('.l-menu-section'),
            SCROLL_BOX_G_TITLE = SCROLL_BOX_G_WRAPPER.find('.l-menu-section-title').outerHeight(true),
            SCROLL_BOX_G_INNER = WINDOW_HEIGHT-HEADER-SCROLL_BOX_G_TITLE,
            D = 24;

        SCROLL_BOX_G_WRAPPER.each(function(){
            var TH = $(this),
                SB = TH.find('.scroll-list-box'),
                SBL = SB.length,
                MAX_S_HEIGHT = SCROLL_BOX_G_INNER / SBL,
                BT = TH.outerHeight(true) - TH.height() + D;
            if ( SBL ){
                SB.each(function(){
                    var TH = $(this),
                        TH_HEIGHT = TH.height(),
                        TH_G_HEIGHT = TH.outerHeight(true),
                        TH_G_DIFF = TH_G_HEIGHT - TH_HEIGHT,
                        TH_G_TITLE = TH.find('.scroll-list-box__title').outerHeight(true),
                        TH_G_BODY = TH.find('.scroll-list-box__body'),
                        NEW_MAX_HEIGHT = (MAX_S_HEIGHT - TH_G_DIFF - TH_G_TITLE);
                    TH_G_BODY.css({
                        'max-height': NEW_MAX_HEIGHT - BT + 'px'
                    });
                });
            }
        });
    }

    scrollResponsive();

    $(window).on('resize', function() {
        scrollResponsive();
    });
}
