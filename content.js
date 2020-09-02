/* Author: Babymillie
   Free to modify watever boss doesn't give me any benifiets anyway!
   But fly for waffleair
*/

chrome.storage.sync.get(['FlyForWaffleAir'], function(result) {
	var findFlyForGroup = $("a[href^='javascript:doSubmit4(72560)']").eq(0);
	if (findFlyForGroup && (result.FlyForWaffleAir==="false"||result.FlyForWaffleAir===undefined)) {
		var form = $('form[name="groupForm"]').eq(0);
		form.find('input[name="id"]').val(72560);
		form.submit();
	}
});
