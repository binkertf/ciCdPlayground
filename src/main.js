import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Fabian Binkert',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Frequent product updates.', 'Lots of automation.'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'GitHub Actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'I want to learn about Jenkins.'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'running and hiking in the mountains'
		]
	}
});
