$(function () {
  let $mailinput = $(".input__mail"),
    $telinput = $(".input__tel");

  function isMailValid() {
    let patternMail = new RegExp(
      "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
    );
    let mail = $mailinput.val();

    return patternMail.test(mail);
  }

  function isTelValid() {
    let patternTel = new RegExp("^0+[0-9]{9}$");
    let tel = $telinput.val();

    return patternTel.test(tel);
  }

  $("button").click(function () {
    if (isMailValid() && isTelValid()) {
      $("form").submit();
    }
  });
});
