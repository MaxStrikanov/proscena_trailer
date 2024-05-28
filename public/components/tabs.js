const tabs = document.querySelectorAll('.option__tab_item');

const tabsContent = document.querySelectorAll('.option__slider_wrapper')


const tabsSwitch = () => {

  for (let i = 0; i < tabs.length; i++) {
	  
    tabs[i].addEventListener("click", () => {
      
    tabs.forEach((item) => {
        item.classList.remove("active");
      });
    
    tabsContent.forEach((item) => {
         item.classList.remove("active");
     });
      
      tabs[i].classList.add("active");
      tabsContent[i].classList.add("active");
    });
  }
}

export default tabsSwitch