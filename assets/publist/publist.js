(() => {
    class Elem {
        constructor(selector) {
            if (typeof selector === 'undefined') {
                this._elems = [];
            } else if (selector instanceof Element) {
                this._elems = [selector];
            } else if (selector instanceof Elem) {
                this._elems = selector.elems;
            } else if (typeof selector === 'string') {
                this._elems = Array.from(document.querySelectorAll(selector));
            } else {
                // assume array like
                // remove duplication and null
                this._elems = [...new Set(selector)].filter(el => el != null);
            }
        }

        get length() {
            return this.elems.length;
        }

        get el() {
            return this.elems[0];
        }

        /**
         * @returns {Array<Element>}
         */
        get elems() {
            return this._elems;
        }

        /**
         * @param {(el: Elem) => boolean} cb return true to break
         */
        each = cb => {
            for (const el of this.elems) {
                if (cb(new Elem(el))) {
                    break;
                }
            }
        }

        /**
         * @param {(el: Elem, index: number, arr: Elem) => any} cb 
         */
        map = cb => {
            return this.elems.map((el, idx) => cb(new Elem(el), idx, this));
        }

        on = (evt, handler) => {
            for (const el of this.elems) {
                el.addEventListener(evt, handler, false);
            }
        }

        off = (evt, handler) => {
            for (const el of this.elems) {
                el.removeEventListener(evt, handler);
            }
        }

        trigger = (evt, data) => {
            const event = new CustomEvent(evt, {
                bubbles: true,
                cancelable: true,
                detail: data,
            });
            for (const el of this.elems) {
                el.dispatchEvent(event);
            }
        }

        addClass = (...classNames) => {
            for (const el of this.elems) {
                el.classList.add(...classNames);
            }
        }

        removeClass = (...classNames) => {
            for (const el of this.elems) {
                el.classList.remove(...classNames);
            }
        }

        toggleClass = (className, force) => {
            const res = this.elems.map(el => el.classList.toggle(className, force));
            return res[0];
        }

        hasClass = (className) => {
            return this.elems.every(el => el.classList.contains(className));
        }

        matches = selector => {
            return this.elems.every(el => el.matches(selector));
        }

        find = selector => {
            const res = this.elems.flatMap(el => Array.from(el.querySelectorAll(selector)));
            return new Elem(res);
        }

        closest = selector => {
            const res = this.elems.map(el => el.closest(selector));
            return new Elem(res);
        }

        css = (style, value) => {
            if (typeof style === 'string') {
                if (typeof value === 'undefined') {
                    // read single value
                    return this.elems.map(el => getComputedStyle(el)[style])[0];
                } else {
                    // set single value
                    for (const el of this.elems) {
                        el.style[style] = value;
                    }
                }
            } else {
                // set multiple values as an object
                for (const el of this.elems) {
                    Object.assign(el.style, style);
                }
            }
        }

        text = t => {
            if (typeof t === 'undefined') {
                return this.elems.map(el => el.textContent)[0];
            } else {
                for (const el of this.elems) {
                    el.textContent = t;
                }
            }
        }

        attr = (name, val) => {
            if (typeof val === 'undefined') {
                return this.elems.map(el => el.getAttribute(name))[0];
            } else {
                for (const el of this.elems) {
                    el.setAttribute(name, val);
                }
            }
        }
    }

    function $(...args) {
        return new Elem(...args);
    }

    class CopyBibTex {
        constructor (cssSelector) {
            const cp = new ClipboardJS(cssSelector);
            cp.on('success', e => {
                e.clearSelection();
                this._showTooltip(e.trigger, 'Copied!');
            });
            cp.on('error', e => {
                this._showTooltip(e.trigger, this._fallbackMessage(e.action));
            });

            $(cssSelector).on('mouseleave', e => this._closeTooltip(e.trigger));
        }

        _fallbackMessage = action => {
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

        _showTooltip = (elem, msg) => {
            const $el = $(elem);
            $el.addClass('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
            $el.attr('aria-label', msg);
        }

        _closeTooltip = elem => {
            const $el = $(elem);
            $el.removeClass('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
            $el.attr('aria-label', '');
        }
    }

    class ShowAbstract {
        constructor (cssSelector) {
            $(cssSelector).on('click', e => {
                const $tgt = $(e.currentTarget).closest('.pub-block').find('.pub-abstract-frame');
                if ($tgt.toggleClass('shown')) {
                    $tgt.css('height', `${$tgt.el.scrollHeight}px`);
                    $tgt.el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    });
                } else {
                    $tgt.css('height', '0px');
                }
            });
        }
    }

    class PublistSearchPanel {
        constructor(publistSelector) {
            this.$publist = $(publistSelector);

            // hash to search panel and timeline list
            window.addEventListener("popstate", this._hashChanged);
            this._hashChanged();

            // search panel changes hash
            this.$publist.find('.publist-search-panel [role="menuitem"]')
                .on('click', this._onItemClick);
            this.$publist.find('.publist-search-panel')
                .on('publist:update', this._onPanelUpdate);
        }

        _hashChanged = () => {
            // get new filters
            const filters = this._parseFragment(location.hash);
            const frag = this._assembleFragment(filters);
            if (frag !== location.hash) {
                history.replaceState(null, '', frag);
            }

            // push filters to each panel
            this.$publist.find('.publist-search-panel')
                .each($panel => this._panelShowFilter($panel, filters));

            // apply filters to the timeline list
            this._applyFilter(filters);
        }

        /**
         * Parse url hash fragment into filters object
         *
         * Fragment meaning:
         * fragment := # (<term>)*
         * term     := / <type> : <value> (, <value>)*
         * type     := venue | tag | topic
         * value    := !all | @cat | <literal>
         * literal  := abc | dea | dfsd
         * @param {string?} hash
         * @returns {Map<string, Set<string>>}
         */
        _parseFragment = encodedHash => {
            const fragRegex = /^#(\/\w+:([@!]?[^@,\/#]+)(,[@!]?[^@,\/#]+)*)+$/;

            try {
                const hash = decodeURI(encodedHash);
                console.log('got hash', hash);

                /** @type {Map<string, Set<string>>} */
                let filters = new Map();
                if (hash == null || !fragRegex.test(hash)) {
                    return filters;
                }
                // remove begining '#' and for each part
                for (const part of hash.slice(1).split('/')) {
                    if (part.length === 0) {
                        continue;
                    }
                    // split at first ':' using capture group, which will be included in result
                    // see https://stackoverflow.com/a/4607799/2441376
                    const [name, values] = part.split(/:(.+)/);
                    const valueParts = new Set(values.split(','));
                    if (valueParts.has('!all')) {
                        // the filter does not filter anything, just skip it
                        continue;
                    }
                    filters.set(name, valueParts);
                }
                console.log('got filters', filters);
                return filters;
            } catch (err) {
                console.log(err);
            }
        }

        /**
         * @param {Map<string, Set<string>>} filters 
         */
        _assembleFragment = filters => {
            const parts = Array.from(filters.entries(), ([k, v]) => {
                const valueParts = [...v].join(',');
                return `${k}:${valueParts}`;
            });
            return encodeURI(['#', ...parts].join('/'));
        }

        /**
         * Show filters on panel
         * @param {Elem} $panel 
         * @param {Map<string, Set<string>} filters 
         */
        _panelShowFilter = ($panel, filters) => {
            // update each select, if the select is not in filters, assume !all
            $panel.find('details').each($sel => {
                const values = filters.get($sel.attr('data-select-for')) || new Set('!all');
                // clear checked on all menu items
                $sel.find('[role="menuitem"]').attr('aria-checked', 'false');
                // apply checked on matching values
                for (const value of values) {
                    $sel.find(`[data-value="${value}"]`).attr('aria-checked', 'true');
                }
                // if nothing were selected, select all
                if ($sel.find('[aria-checked="true"]').length === 0) {
                    $sel.find('[data-value="!all"]').attr('aria-checked', 'true');
                }
                // update summary based on selected items
                const $selected = $sel.find('[aria-checked="true"] .display-value');
                const $valueTag = $sel.find('.summary-value');
                if ($selected.length > 1) {
                    $valueTag.text('Multiple');
                } else {
                    $valueTag.text($selected.text());
                }
            });
        }

        /**
         * @param {Map<string, Set<string>>} filters 
         */
        _applyFilter = filters => {
            // go over the full list and see if it matches the filter
            this.$publist.find('.pub-list li').each($li => {
                const matched = this._matches($li, filters);
                $li.toggleClass('filter-hide', !matched);
            });
            this.$publist.find('.pub-list section.year').each($sec => {
                const $items = $sec.find('li:not(.filter-hide)');
                $sec.toggleClass('filter-hide', $items.length <= 0);
            });
            // update search panel's statistics
            this.$publist.find('.selected-value').text(this.$publist.find('.pub-list li:not(.filter-hide)').length);
        }

        /**
         * if the item matches filters
         * @param {Elem} $li 
         * @param {Map<string, Set<string>>} filters 
         * @returns {boolean}
         */
        _matches = ($li, filters) => {
            // create the selector on all data attrs
            for (const [id, values] of filters) {
                // if any value in values matches the $li, continue
                // otherwise return false
                if (values.has('!all')) {
                    continue;
                }
                if (id === 'venue') {
                    // special handling of conference cat
                    const valueCat = $li.attr('data-pub-cat');
                    if (values.has(`@${valueCat}`)) {
                        continue;
                    }
                    const value = $li.attr(`data-pub-venue`);
                    if (value === '' && values.has('!others')) {
                        continue;
                    }
                    if (!values.has(value)) {
                        return false;
                    }
                } else {
                    const liValues = JSON.parse($li.attr('data-pub-extra'))[id] || [];
                    if (values.has('!others') && liValues.length === 0) {
                        continue;
                    }
                    if (liValues.filter(val => values.has(val)).length > 0) {
                        continue;
                    }
                    return false;
                }
            }
            return true;
        }

        /**
         * @param {MouseEvent} evt
         */
        _onItemClick = evt => {
            // TODO
            const $item = $(evt.currentTarget);

            if ($item.attr('aria-checked') === 'true') {
                $item.attr('aria-checked', 'false');
            } else {
                $item.attr('aria-checked', 'true');
            }

            const $sel = $item.closest('details');
            const myValueCat = $item.attr('data-value-cat');
            const myValue = $item.attr('data-value');
            // the following only clears the item's superset
            // but not clearing items they cover. That is done in _filtersFromPanel
            if (myValue !== '!all') {
                // everything not !all clears !all
                $sel.find('[data-value="!all"').attr('aria-checked', 'false');
            }
            if (!myValue.match(/^[!@]/)) {
                // a normal item also clears its cat
                $sel.find(`[data-value="${myValueCat}"`).attr('aria-checked', 'false');
            }

            // trigger an update
            $item.trigger('publist:update');
        }

        /**
         * @param {CustomEvent} evt
         */
        _onPanelUpdate = evt => {
            const $panel = $(evt.currentTarget);
            // update frag
            const filters = this._filtersFromPanel($panel);
            const frag = this._assembleFragment(filters);
            history.pushState(null, '', frag);
            this._hashChanged();
        }

        /**
         * @param {Elem} $panel 
         * @returns {Map<string, Set<string>}
         */
        _filtersFromPanel = $panel => {
            let filters = new Map();
            $panel.find('details').each($sel => {
                const name = $sel.attr('data-select-for');
                /** @type {string[]} */
                let values = $sel.find('[aria-checked="true"]')
                    .map($item => $item.attr('data-value'));
                
                // clean up the values
                // step 1: compute all covered single value from @xxx items
                const covered = new Set(values.filter(v => v.startsWith('@'))
                    .flatMap(v => {
                        return $sel.find(`[data-value-cat="${v}"]`)
                            .map(el => el.attr('data-value'));
                    }));
                // step 2: remove anything from values that are covered
                values = values.filter(v => !covered.has(v));
                // step 3: if there is !all, that should be the only one
                if (values.indexOf('!all') !== -1) {
                    values = ['!all'];
                }
                // step 4: if empty, it should be !all
                if (values.length === 0) {
                    values = ['!all'];
                }

                filters.set(name, new Set(values));
            });
            return filters;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        // copy function for research publication page
        new CopyBibTex('.pub-list .pub-links .pub-link-bibtex');

        // show abstract
        new ShowAbstract('.pub-block .pub-link-abstract');

        // apply filtering according to url hash
        new PublistSearchPanel('.publist');
    });

})();
