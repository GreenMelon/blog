var $=function(e,t){return void 0===t&&(t=document),t.querySelector(e)};if("speechSynthesis"in window){var readBtn=$(".article-speak");readBtn.removeAttribute("hidden");var articleText=$(".article-content").textContent,changeBtnText=function(e){readBtn.textContent=e},utterance=new SpeechSynthesisUtterance;utterance.text=articleText,utterance.rate=.95,utterance.lang="zh-CN",utterance.addEventListener("start",function(){return changeBtnText("暂停朗读")}),utterance.addEventListener("pause",function(){return changeBtnText("继续朗读")}),utterance.addEventListener("resume",function(){return changeBtnText("暂停朗读")}),utterance.addEventListener("end",function(){return changeBtnText("重新朗读")}),readBtn.addEventListener("click",function(){speechSynthesis.paused?speechSynthesis.resume():speechSynthesis.speaking?speechSynthesis.pause():(readBtn.textContent="处理中...",speechSynthesis.speak(utterance))}),window.addEventListener("beforeunload",function(){speechSynthesis.cancel()})}
//# sourceMappingURL=speak.js.map
