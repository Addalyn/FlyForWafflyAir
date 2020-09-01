/* Author: Babymillie
   Free to modify watever boss doesn't give me any benifiets anyway!
   But fly for waffleair
*/

var findFlyForGroup = $("a[href^='javascript:doSubmit4(72560)']").eq(0);

if (findFlyForGroup) {
	$('form[name="groupForm"').eq(0).find('input[name="id"]').val(72560);
	$('form[name="groupForm"').eq(0).submit();
}
