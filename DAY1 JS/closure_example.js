function x() {
  var a = 7;
  function y() {
    console.log(a);
    debugger;
  }
  y();
}
x();
