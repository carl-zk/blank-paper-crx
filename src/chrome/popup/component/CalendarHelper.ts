function clickDate(event: Event, date: string) {
  chrome.runtime.sendMessage({ clicked_date: date }, function (response) {
    console.log(response.farewell);
  });
}

function bindAllClickEvent() {
  let riqi_list = document.querySelectorAll('div.wnrl_riqi')!
  riqi_list.forEach(riqi => {
    if (!riqi.getAttribute('isBind')) {
      riqi.setAttribute('isBind', 'true')
      let href = riqi.querySelector('a')?.getAttribute('href')!
      let date = href.match(/\d{4}-\d{2}-\d{2}/)![0]
      riqi.addEventListener('mouseup', (event) => clickDate(event, date), false)
    }
  })
}

bindAllClickEvent()

document.removeEventListener("mousedown", (event) => { bindAllClickEvent() })
document.addEventListener("mousedown", (event) => { bindAllClickEvent() })

export { }