function dosum(){
  function floor(number){return Math.floor(number*Math.pow(10,2))/Math.pow(10,2)}
  function fc(){return document.formcalc}
  var mi = fc().IR.value/1200;
  var base = 1;
  var mbase = 1 + mi;
  for (var i=0; i < fc().YR.value*12; i++){base *= mbase}
  fc().PI.value = floor(fc().LA.value*mi/(1 - (1/base)));
  fc().MT.value = floor(fc().AT.value/12);
  fc().MI.value = floor(fc().AI.value/12);
  var dasum = fc().LA.value*mi/(1 - (1/base)) + fc().AT.value/12 + fc().AI.value/12;
  fc().MP.value = floor(fc().LA.value*mi/(1 - (1/base)) + fc().AT.value/12 + fc().AI.value/12);
  fc().MP.focus();
}
$(document).ready(function(){
		$.each($('input'),function(){
				if($(this).attr('name') != 'submit' && $(this).attr('name') != undefined && $(this).parents($('form')).attr('name') == 'formcalc'){
					$(this).change(dosum);
				}
		})
		$('#loanSubmit').click(dosum);
});
