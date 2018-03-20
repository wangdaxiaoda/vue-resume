import $ from 'jquery'

function removeItem(event) {
  event.currentTarget.parentElement.remove();
}

function hideEditInput(event) {
  $(event.currentTarget).hide();
}

function showEditInput(event) {
  var $input = $(event.currentTarget).prev('input');
  var isShow = $input.css('display') == 'none' ? !1 : !0;
  if (isShow) $input.hide();
  else $input.show();
}

export {
  removeItem,
  hideEditInput,
  showEditInput
}
