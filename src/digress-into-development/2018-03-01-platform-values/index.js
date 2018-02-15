/* eslint no-unused-vars: 0 */
/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
(function () {
  // https://stackoverflow.com/questions/15865747/get-querystring-array-values-in-javascript
	function getURLParam(key,target){
		var values = []
		if (!target) target = location.href

		key = key.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')

		var pattern = key + '=([^&#]+)'
		var o_reg = new RegExp(pattern,'ig')
		while (true){
			var matches = o_reg.exec(target)
			if (matches && matches[1]){
				values.push(matches[1])
			} else {
				break
			}
		}

		if (!values.length){
			return null   
		} else {
			return values.length == 1 ? values[0] : values
		}
	}

	function setQueryString(title, set) {
		const currentUrl = location.pathname 
		const urlWithTitle = `${currentUrl}?title=${title}`
		const url = [...set].reduce((a, b) => { 
			return `${a}&values[]=${b}`
		}, urlWithTitle)
		history.replaceState({}, 'Platform Values', url)
		return url
	}

	function redraw(selected) {
		const textElement                = document.getElementById('svgText')
		const textElementShadow          = document.getElementById('svgTextShadow')
		const greenBackgroundElm         = document.getElementById('svgGreenBackground')
		const greenBackgroundStraightElm = document.getElementById('svgGreenBackgroundStraighLine')
		const gradientElm                = document.getElementById('svgGradient')

		const str = [...selected].sort().join(' ')

		greenBackgroundElm.style.fill         = (selected.size > 0) ? '#4c1' : '#e05d44'
		greenBackgroundStraightElm.style.fill = greenBackgroundElm.style.fill

		textElement.innerHTML = str
		textElementShadow.innerHTML = str
		var bbox = textElement.getBBox()
		var width = bbox.width

		greenBackgroundElm.setAttribute('width', width+7)
		gradientElm.setAttribute('width', '96')

		const svg = new XMLSerializer().serializeToString(document.getElementById('svg'))
		const url = setQueryString(titleInput.value, selected)
		const tag = '<a href="https://dudzik.co' + url + '"><img src="data:image/svg+xml;base64,' + window.btoa(svg) + '"/></a>'

		const tagMD = '[![](data:image/svg+xml;base64,' + window.btoa(svg) +')]("https://dudzik.co' + url + '")'

		const badgeMarkdown = document.getElementById('badgeMarkdown')
		const badgeHTML     = document.getElementById('badgeHTML')

		badgeHTML.value = tag
		badgeMarkdown.value = tagMD
	}

	var selected = new Set()
	let matches = document.body.querySelectorAll('.platform-values-container > a')
	let titleInput = document.querySelector('input[name=platformName]')

	titleInput.oninput = function() {
		setQueryString(this.value, selected)
		redraw(selected)
	}

	matches.forEach(elm => {
		elm.onclick = function() {
			const value = this.innerHTML
			if (selected.has(value)) {
				selected.delete(value)
				this.className = ''
				setQueryString(titleInput.value, selected)
				redraw(selected)
			} else {
				selected = selected.add(value)
				this.className = 'active'
				setQueryString(titleInput.value, selected)
				redraw(selected)
			}
		}
	})

	const initVal = getURLParam('values[]') || ['Transparency']
	let iv = (typeof initVal === 'string') ? [initVal] : initVal

	iv.forEach(value => {
		matches.forEach(elm => {
			if (elm.innerHTML == value) {
				selected = selected.add(value)
				elm.className = 'active'
			}
		})
	})
	const title = getURLParam('title')
	titleInput.value = title

	redraw(selected)

	const badgeMarkdownCopy = document.getElementById('badgeMarkdownCopy')
	const badgeHTMLCopy     = document.getElementById('badgeHTMLCopy')

	badgeHTMLCopy.addEventListener('click', function(event) {
		const badgeHTML         = document.getElementById('badgeHTML')
		badgeHTML.select()

		try {
			var successful = document.execCommand('copy')
			if (!successful) {
				alert('Copying text command was unsuccessful')
			}
		} catch (err) {
			alert('Copying text command was unsuccessful')
		}
	}) 

	badgeMarkdownCopy.addEventListener('click', function(event) {
		const badgeMarkdown     = document.getElementById('badgeMarkdown')
		badgeMarkdown.select()

		try {
			var successful = document.execCommand('copy')
			if (!successful) {
				alert('Copying text command was unsuccessful')
			}
		} catch (err) {
			alert('Copying text command was unsuccessful')
		}
	}) 
})()
