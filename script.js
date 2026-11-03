const dateInput = document.getElementById('date');
const now = new Date();
dateInput.min = new Date(now.getTime() - now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city').value;
  const type = document.getElementById('type').value;
  const date = dateInput.value;
  const result = document.getElementById('searchResult');
  result.textContent = `${city} · ${type} · ${date}. Бұл — демо іздеу. Нақты ұсыныстар мен брондау кейін қосылады.`;
  result.hidden = false;
});
function showDemo(message){alert(message)}
document.querySelectorAll('.demo').forEach(button=>button.addEventListener('click',()=>showDemo('Бұл демо карточка. Нақты қызмет көрсетушілер мен брондау жүйесі келесі кезеңде қосылады.')));
['partnerTop','partnerBottom'].forEach(id=>document.getElementById(id).addEventListener('click',()=>showDemo('Серіктес тіркеу және тойхана иесін тексеру жүйесін келесі кезеңде қосамыз.')));
