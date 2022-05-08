function clickDate(event: Event) {
  console.log('calendar click', event);
}

let jie_guo = document.querySelector('#jie_guo')!
console.log('jie_guo', jie_guo);

let riqi_list = document.querySelectorAll('div.wnrl_riqi')!
console.log('riqi_list ', riqi_list);

riqi_list.forEach(riqi => { riqi.addEventListener('mousedown', clickDate, false) })

document.addEventListener("mouseup", (event) => {
  console.log(event)
})

export { }