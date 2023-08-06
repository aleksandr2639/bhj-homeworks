const tooltip = document.querySelectorAll('.has-tooltip')
function choiceTooltip(event) {
    event.preventDefault()
    const hasTooltip = event.target.closest('.has-tooltip')
    if(hasTooltip){
        const valueTooltip = hasTooltip.getAttribute('title')
        const {top, left} = hasTooltip.getBoundingClientRect()
        const addTooltipElement = `<div class="tooltip" style="left: ${left}px; top: ${top  + 20}px">${valueTooltip}</div>`;
        event.target.insertAdjacentHTML('beforeend',addTooltipElement)

        const addTooltipClassActive = hasTooltip.querySelector('.tooltip')
        addTooltipClassActive.classList.toggle('tooltip_active')
    }
}
tooltip.forEach((item) =>
    item.addEventListener('click', choiceTooltip)
)
window.addEventListener("scroll", () =>
    document.querySelectorAll('.tooltip').forEach((el) =>
        el.remove()
    )
);