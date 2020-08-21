function publist() {
    // copy function for research publication page
    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');

        if (/iPhone|iPad/i.test(navigator.userAgent)) {
            actionMsg = 'No support :(';
        } else if (/Mac/i.test(navigator.userAgent)) {
            actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
        } else {
            actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
        }

        return actionMsg;
    }

    function showTooltip(elem, msg) {
        elem.classList.add('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
        elem.setAttribute('aria-label', msg);
    }

    function closeTooltip(elem) {
        elem.classList.remove('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
        elem.setAttribute('aria-label', '');
    }

    function oneshotCloseTooltip(evt, elem) {
        evt.target.removeEventListener(evt.type, arguments.callee);
        closeTooltip(elem);
    }

    const cp = new ClipboardJS('.pub-list .pub-links .pub-link-bibtex');
    cp.on('success', function (e) {
        e.clearSelection();

        showTooltip(e.trigger, 'Copied!');
        e.trigger.addEventListener('mouseleave', evt => oneshotCloseTooltip(evt, e.trigger));
    });
    cp.on('error', function(e) {
        showTooltip(e.trigger, fallbackMessage(e.action));
        e.trigger.addEventListener('mouseleave', evt => oneshotCloseTooltip(evt, e.trigger));
    });

    // show abstract
    document.querySelectorAll('.pub-block .pub-link-abstract').forEach((elem) => {
        elem.addEventListener('click', () => {
            const tgt = elem.closest('.pub-block').querySelector('.pub-abstract-frame');
            tgt.classList.toggle('shown');
            if (tgt.classList.contains('shown')) {
                tgt.style.height = `${tgt.scrollHeight}px`;
                tgt.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            } else {
                tgt.style.height = `0px`;
            }
        });
    });

    // filters
    function addClass(elems, ...className) {
        elems.forEach(elem => elem.classList.add(...className));
    }
    function removeClass(elems, ...className) {
        elems.forEach(elem => elem.classList.remove(...className));
    }
    document.querySelectorAll('.publist .timeline-search-panel').forEach(searchPanel => {
        const publist = searchPanel.closest('.publist');
        const select = searchPanel.querySelector('.select-box select');

        const updateFilter = () => {
            // check select
            const venue = select.value;
            if (venue !== 'all') {
                addClass(publist.querySelectorAll(`.pub-list li:not([data-pub-venue="${venue}"])`), 'filter-tohide');
            }
            // check boxes
            let toHide = searchPanel.querySelectorAll('.check-box input[type="checkbox"]:not(:checked)');
            toHide = Array.from(toHide);
            toHide = toHide.flatMap(elem => {
                const cat = elem.getAttribute('value');
                return Array.from(publist.querySelectorAll(`.pub-list li[data-pub-cat="${cat}"]`));
            });
            addClass(toHide, 'filter-tohide');
            // hide the whole section if it's empty
            publist.querySelectorAll('.pub-list section.year').forEach(section => {
                const items = section.querySelectorAll('li.filter-tohide');
                if (items.length == section.querySelectorAll('li').length) {
                    section.classList.add('filter-tohide');
                    removeClass(items, 'filter-tohide');
                }
            });

            // hide those are not selected in this update
            addClass(publist.querySelectorAll('.pub-list .filter-tohide:not(.filter-hide)'), 'filter-hide');
            // unhide those are selected in this update
            removeClass(publist.querySelectorAll('.pub-list .filter-hide:not(.filter-tohide)'), 'filter-hide');
            // remove tohide
            removeClass(publist.querySelectorAll('.pub-list .filter-tohide'), 'filter-tohide');
        };
        select.addEventListener('change', updateFilter);
        searchPanel.querySelectorAll('.check-box input[type="checkbox"]')
            .forEach(elem => elem.addEventListener('change', updateFilter));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    publist();
});
