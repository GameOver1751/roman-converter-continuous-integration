test("Valid numbers Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman("1"), {value: "I", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman("54"), {value: "LIV", message: '', result: true}, "TC-2");
});

test("Incorrect numbers Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman("-1"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-3");
  assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman("999999"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-5");
});

test("Letters Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman("a"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-6");
  assert.propEqual(convertIntegerToRoman("a5"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-7");
  assert.propEqual(convertIntegerToRoman("z"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-8");
});

test("Symbols Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman("1/2"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9");
  assert.propEqual(convertIntegerToRoman("%"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-10");
});

//----------------------------------------------------------------------------------------------

test("Valid numbers Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger("XIV"), {value: 14, message: '', result: true}, "TC-11");
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-12");
});

test("Incorrect numbers Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger("XXXXXXX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13");
  assert.propEqual(convertRomanToInteger("-X"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-14");
  assert.propEqual(convertRomanToInteger("XVX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-15");
  assert.propEqual(convertRomanToInteger("N"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-16");
});

test("Numbers Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-17");
  assert.propEqual(convertRomanToInteger("11a"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-18");
});

test("Symbols Integer to Roman", function(assert) {
  assert.propEqual(convertRomanToInteger("&$"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-19");
});