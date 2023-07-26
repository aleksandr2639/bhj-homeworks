 const text = Array.from(document.querySelectorAll('.reveal'))
 console.log(text)


addEventListener('scroll', () => {
  for(let i = 0; i < text.length; i++) {
  const {top, bottom} = text[i].getBoundingClientRect()
      console.log({top, bottom})
  if ((bottom > 0) && (top < window.innerHeight)){
  text[i].classList.add('reveal_active')
  } else text[i].classList.remove('reveal_active')}
 })

 console.log(window.innerHeight)


