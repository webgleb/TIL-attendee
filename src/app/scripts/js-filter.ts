import * as moment from 'moment';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';
/* tslint:disable */
export function filterJslogic () {

  let dateFormat = 'mm/dd/yy';
  let todayDate = new Date();
  let today = get_today_in_format(todayDate, dateFormat);

  function get_today_in_format(date, dateFormat) {
    let format_date = dateFormat;
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();

    if(dd<10) {
      dd = '0'+dd;
    };

    if(mm<10) {
      mm = '0'+mm;
    };
    // console.log(format_date.replace('mm',mm).replace('dd',dd).replace('yy',yy));
    return format_date.replace('mm',mm).replace('dd',dd).replace('yy',yy);
  };

  function init_simple_datepickers(datepicker_in, datepicker_out){
    datepicker_in
      .datepicker({
        // minDate: today,
        maxDate: datepicker_in.attr('data-other-date') ? datepicker_in.attr('data-other-date') : null,
        isRTL: false,
        dateFormat: dateFormat,
        numberOfMonths: 1,
        beforeShow: function(elem, dp){
          setTimeout(function(){
            uptade_this_other_date(elem,dp);
            update_fill_range(datepicker_in, datepicker_out, 'in', dp);
            $(elem).closest('.datepicker-wrap').append(dp.dpDiv);
          },0);
        },
        onChangeMonthYear : function(year, month, dp){
          setTimeout(function(){
            uptade_this_other_date(datepicker_in[0],dp);
            update_fill_range(datepicker_in, datepicker_out, 'in', dp);
          },0);
        },
        onSelect: function(date, dp){
          update_other_date(datepicker_out, $(this), 'minDate');
          // setTimeout(function(){
          // 	datepicker_out.datepicker( "show" );
          // }, 0);
        }
      })
      .on('change', function(e){
        update_other_date(datepicker_out, $(this), 'minDate');
      })
      .addClass('datepicker_initialized');

    datepicker_out
      .datepicker({
        minDate: datepicker_out.attr('data-other-date') ? datepicker_out.attr('data-other-date') : today,
        isRTL: false,
        dateFormat: dateFormat,
        numberOfMonths: 1,
        beforeShow: function(elem, dp){
          setTimeout(function(){
            uptade_this_other_date(elem,dp);
            update_fill_range(datepicker_in, datepicker_out, 'out', dp);
            $(elem).closest('.datepicker-wrap').append(dp.dpDiv);
          },0);
        },
        onChangeMonthYear : function(year, month, dp){
          setTimeout(function(){
            uptade_this_other_date(datepicker_out[0],dp);
            update_fill_range(datepicker_in, datepicker_out, 'out', dp);
          },0);
        },
        onSelect: function(date, dp){
          update_other_date(datepicker_in, $(this), 'maxDate');
        }
      })
      .on('change', function(e){
        update_other_date(datepicker_in, $(this), 'maxDate');
      })
      .addClass('datepicker_initialized');
  };

  function update_fill_range(datepicker_in, datepicker_out, type, dp){
    let date_in = datepicker_out.attr('data-other-date'),
      date_out = datepicker_in.attr('data-other-date'),
      date_in_arr = [],
      date_out_arr = [],
      day_in,
      month_in,
      year_in,
      day_out,
      month_out,
      year_out;

    if (date_in && date_out) {
      date_in_arr = date_in.split('/');
      date_out_arr = date_out.split('/');
      day_in = parseInt(date_in_arr[1]);
      month_in = parseInt(date_in_arr[0]);
      year_in = parseInt(date_in_arr[2]);
      day_out = parseInt(date_out_arr[1]);
      month_out = parseInt(date_out_arr[0]);
      year_out = parseInt(date_out_arr[2]);

      dp.dpDiv
        .find('.ui-datepicker-calendar td')
        .not('.ui-datepicker-unselectable')
        .not('.ui-state-disabled')
        .each(function(){
          let td = $(this),
            day = parseInt(td.find('a').text()),
            month = parseInt(td.attr('data-month')) + 1,
            year = parseInt(td.attr('data-year'));

          if(
            moment(year_in + '-' + month_in + '-' + day_in).isBefore(year + '-' + month + '-' + day) &&
            moment(year_out + '-' + month_out + '-' + day_out).isAfter(year + '-' + month + '-' + day) ||
            year == year_in && month == month_in && day == day_in ||
            year == year_out && month == month_out && day == day_out
          ){
            td.addClass('dp_range');
          };
          if (
            type == 'in' && year == year_out && month == month_out && day == day_out || 
            type == 'out' && year == year_in && month == month_in && day == day_in
          ) {
            td.addClass('dp_other');
          };
        });
    };
  };

  function getDate( element ) {
    let date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    };
    return date;
  };

  function update_other_date(other_input, this_input, limit_direction){
    setTimeout(function(){
      other_input.attr('data-other-date', this_input.val());
      other_input.datepicker( "option", limit_direction, getDate(this_input[0]) );
    },0);
  };

  function uptade_this_other_date(elem,dp){
    let $elem = $(elem);
    let other_date = $elem.attr('data-other-date');
    if (other_date){
      dp.dpDiv
        .find('.ui-datepicker-calendar td')
        .not('.ui-datepicker-unselectable')
        .not('.ui-state-disabled').each(function(){
          let th = $(this),
            day = th.find('a').text(),
            month = (parseInt(th.attr('data-month')) + 1).toString(),
            year = th.attr('data-year');
          day = day.length == 1 ? '0' + day : day;
          month = month.length == 1 ? '0' + month : month;
          if (month + '/' + day + '/' + year == other_date){
            th.addClass('dp_other');
          };
        });
    };
  };

  function init_datepickers(){
    let datepicker_in = $('.datepicker-wrap .date_from').not('.datepicker_initialized'),
      datepicker_out = $('.datepicker-wrap .date_to').not('.datepicker_initialized');

    if (datepicker_in.length > 0 && datepicker_out.length > 0) {
      init_simple_datepickers(datepicker_in, datepicker_out);
    };
  };

  function get_other_picker(th_dp){
    if (th_dp.hasClass('date_from')){
      return {dp: $('.datepicker-wrap .date_to'), direction: 'minDate'};
    };
    if (th_dp.hasClass('date_to')){
      return {dp: $('.datepicker-wrap .date_from'), direction: 'maxDate'};
    };
    return {dp: $()};
  };
  $('body').off('click.jsFilterTrigger').on('click.jsFilterTrigger', '.dp-arrow', function(){
    let th = $(this),
      new_date,
      dp = th.closest('.datepicker-wrap').find('.form-control'),
      other = get_other_picker(dp);
    if (th.hasClass('dp-arrow-prev')) {
      new_date = get_today_in_format(moment(dp.datepicker("getDate")).add(-1, 'days').toDate(), dateFormat);
    };
    if (th.hasClass('dp-arrow-next')) {
      new_date = get_today_in_format(moment(dp.datepicker("getDate")).add(1, 'days').toDate(), dateFormat);
    };
    dp.datepicker( "setDate", new_date);
    if (other.dp.length) {
      other.dp.attr('data-other-date', new_date);
      update_other_date(other.dp, dp, other.direction);
    };
  });

  init_datepickers();
}
/* tslint:enable */
export function changeToAppDate(oldVal) {
  const parsedDate = moment(oldVal, 'DD/MM/YYYY').toDate();
  return moment(parsedDate).format('YYYY-MM-DD');
}
export function changeToPluginDate(oldVal) {
  const parsedDate = moment(oldVal, 'YYYY-MM-DD').toDate();
  return moment(parsedDate).format('MM/DD/YYYY');
}

