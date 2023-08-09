const tooltip = Array.from(document.querySelectorAll('.has-tooltip'))

tooltip.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const createTooltipElement = document.createElement('div');
        createTooltipElement.classList.add('tooltip');
        createTooltipElement.textContent = item.getAttribute('title');
        createTooltipElement.classList.add('tooltip_active');

        const tooltipActive = item.querySelector('.tooltip_active');
        if(tooltipActive) {
            tooltipActive.remove();
            return;
        }

        deleteEl()

        const {top, left} = item.getBoundingClientRect();
        createTooltipElement.style.top =  top + 20 + 'px';
        createTooltipElement.style.left = left + 'px';

        item.appendChild(createTooltipElement);
    });
});


function deleteEl() {
    const countTooltip = document.querySelectorAll('.tooltip');
    if (countTooltip.length >= 1) {
        countTooltip[0].remove();
    }
}

window.addEventListener('scroll', deleteEl)


