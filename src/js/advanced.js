import { advancedBtn, choicesElement, playingZone, choiceItems } from "./htmlElaments";

export function advance(isAdvancedMode) {
    advancedBtn.addEventListener('click', () => {
        isAdvancedMode = !isAdvancedMode; 

        if(isAdvancedMode) {
          advancedBtn.textContent = 'BASIC'
          choicesElement.classList.remove("bg-[url(./images/triangle.png)]")
          choicesElement.classList.add("bg-[url(./images/Polygon.png)]")

          choiceItems.forEach(item => {
              if(item.classList.contains('hidden')) {
                  item.classList.remove('hidden')
                  item.classList.add("place-self-end")
                }
                if(item.dataset.choice === 'paper'){
                    item.className = ''
                }
            })
            choiceItems[0].className = 'col-span-2 place-self-center'
            
        } else {
          advancedBtn.textContent = 'ADVANCED'
          choicesElement.classList.remove("bg-[url(./images/Polygon.png)]")
          choicesElement.classList.add("bg-[url(./images/triangle.png)]")
          choiceItems[0].className = ''
          choiceItems.forEach(item => {
            let choice = item.dataset.choice
            if (choice === 'lizard' || choice === 'puppy') {
              item.classList.add('hidden'); 
            }
             
            if(item.dataset.choice === 'paper'){
                item.className = 'col-span-2 place-self-center'
            }
          })
        }
      
        choicesElement.querySelectorAll("li img").forEach(img => {
          isAdvancedMode ? img.className = "w-[145px] h-[148px]" : img.className = "w-[198px] h-[203px]"
        })
      
        playingZone.classList.add('hidden');
        choicesElement.classList.remove('hidden');
      });
};

