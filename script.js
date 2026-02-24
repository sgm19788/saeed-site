<script>
  // نصوص تظهر بشكل متتابع
  const texts = ["مرحبا بك في Safrly", "احجز عروضك بسهولة", "أفضل تجربة حجز"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if(count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('hero-title').textContent = letter;
    if(letter.length === currentText.length){
      count++;
      index = 0;
      setTimeout(type, 1500); // وقت الانتظار قبل النص التالي
    } else {
      setTimeout(type, 150);
    }
  }());
</script>
