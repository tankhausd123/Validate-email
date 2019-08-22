function checkMail(str) {
    regexp= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
    if (regexp.test(str)) {
      alert('true')
    }else {
        alert('false')
    }
}