// @ts-ignore
import App from './App.svelte';

class SvelteMfe extends HTMLElement {
	connectedCallback() {
		new App({
			target: this,
		});
	}
}

customElements.define('svelte-mfe', SvelteMfe);
