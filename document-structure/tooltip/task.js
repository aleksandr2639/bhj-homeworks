const tooltip = Array.from(document.querySelectorAll('.has-tooltip'))

function addTooltipElement(event) {
    deleteTooltipElement(event)
    event.preventDefault()
    const valueTooltip = event.target.getAttribute('title'),
        {left, top} = event.target.getBoundingClientRect(),
        hasTooltip = document.querySelector('body'),
        createTooltipElement = `<div class="tooltip" style="left: ${left}px; top: ${top + 25}px">${valueTooltip}</div>`;
    hasTooltip.insertAdjacentHTML('beforeend',createTooltipElement)

    const addTooltipClassActive = hasTooltip.querySelector('.tooltip')
    addTooltipClassActive.classList.toggle('tooltip_active')
}

function deleteTooltipElement(event) {
    if (!event.defaultPrevented) {
        document.querySelectorAll('.tooltip').forEach((el) =>
            el.remove()
        )}
}

tooltip.forEach((item) =>
    item.addEventListener('click', addTooltipElement))

window.addEventListener("scroll", deleteTooltipElement);

tooltip.forEach((item) =>
    item.addEventListener('click', addTooltipElement))


window.addEventListener("scroll", deleteTooltipElement);