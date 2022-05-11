document.querySelector<HTMLElement>('#main_title')!.style.display = 'none'
document.querySelector<HTMLElement>('#pmk_sj_top')!.style.display = 'none'

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

function hiddenElement() {
  // document.querySelectorAll<HTMLElement>('.wnrl_k_you_id_wnrl_jieri').forEach(el => el.style.visibility = 'hidden')
  document.querySelectorAll<HTMLElement>('.wnrl_k_you_id_wnrl_jieri').forEach(el => el.setAttribute('style', 'visibility: hidden'))
  document.querySelectorAll<HTMLElement>('.wnrl_k_you_id_wnrl_yi').forEach(el => el.style.visibility = 'hidden')
  document.querySelectorAll<HTMLElement>('.wnrl_k_you_id_wnrl_ji').forEach(el => el.style.visibility = 'hidden')
}

bindAllClickEvent()
hiddenElement()

document.removeEventListener("mousedown", (event) => { bindAllClickEvent(); hiddenElement() })
document.addEventListener("mousedown", (event) => { bindAllClickEvent() })

export { }