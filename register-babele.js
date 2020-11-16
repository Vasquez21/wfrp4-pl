Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'wfrp4-pl',
			lang: 'pl',
			dir: 'compendium'
		});
	}
});
