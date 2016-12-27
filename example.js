var tp_1 = new TextProcessingFramework("example");
console.log(tp_1.Process());

tp_1.Process = function(){
  var string_process = this._string + "Process";
  return string_process;
}

console.log(tp_1.Process());
