export const headerNav = {
  init () {
    $('body').on('click.headerNav', '.l-menu-content-header-col-nav-ctr button', function() {
      $('body').addClass('__is-filters');
    });

    $('body').on('click.headerNav', '.l-menu-filter__tc-close', function() {
      $('html').removeClass('__menu__');
    });

    $('body').on('click.headerNav', '.l-menu-filter__tc-close button', function() {
      $('body').removeClass('__is-filters');
    });

    // $('body').on('click.headerNav', '.l-menu-content-header-col-nav-ctr button', function() {
    //   $('body').addClass('__is-nav');
    // });

    // $('body').on('click.headerNav', '.l-menu-side-cl', function() {
    //   $('body').removeClass('__is-nav');
    // });

    $('body').on('click.headerNav', '.c-menu-item-user-initials', function() {
      $('.c-menu-item-user').toggleClass('active');
    });
    $(document).on('click.headerNav', function(e) {
      if ( $(e.target).closest('.c-menu-item-user').length === 0 ) {
        $('.c-menu-item-user').removeClass('active');
      }
    });
  },
  destroy () {
    $('body').unbind('click.headerNav');
    $(document).unbind('click.headerNav');
  }
};
