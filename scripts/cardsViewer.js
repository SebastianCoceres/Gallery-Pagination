const captionItem = document.querySelectorAll(".gallery__item--caption");
		const descriptionItem = document.querySelectorAll(".gallery__item--description");

		captionItem.forEach((item) => {
			item.addEventListener("mouseover", showElement, false);
			item.addEventListener("mouseout", hideElement, false);

			function showElement() {
				item.setAttribute("style", "height: auto;");
				item.classList.add("open");
				descriptionItem.forEach((el) => {
					if(el.parentNode.classList.contains("open")){
						el.setAttribute("style", "font-size: var(--font-lit);")
					}
					
				})
			}

			function hideElement() {
				item.setAttribute("style", "height: 8rem;");
				item.classList.remove("open");

				descriptionItem.forEach((el) => {
					el.setAttribute("style", "font-size: 0;")
				})
			}
		});