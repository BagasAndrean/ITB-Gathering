$('ul.tabs li').click(function(){
  var $this = $(this);
  var $theTab = $(this).attr('id');
  console.log($theTab);
  if($this.hasClass('active')){
    // do nothing
  } else{
    $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
    $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
  }
});

$(document).ready(function(){

  $('#tab-bio').click(function(){
    $('#tab1').show();
    $('#tab2').hide();
  })
  $('#tab-degrees').click(function(){
    $('#tab2').show();
    $('#tab1').hide();
  })
})