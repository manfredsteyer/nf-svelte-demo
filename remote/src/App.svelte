<script lang="ts">
	import { of, tap } from 'rxjs';

	import { state } from 'shared';
	console.log('remote got message:', state.message);

	of('emit')
		.pipe(tap(() => console.log("I'm RxJs from remote")))
		.subscribe();
</script>

<div id="container">
    <div>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/svelte-icon.png" width="50">
    </div>
    <h1>Select an Upgrade</h1>
    <div>
        <input type="text" placeholder="From">
    </div>
    <div>
        <input type="text" placeholder="To">
    </div>
    <div>
        <button>Search</button>
    </div>
</div>

<style>
input[type=text] {
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid silver;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

button {
    border: 2px solid silver;
    background-color: white;
    font-size: 16px;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
}

button:active {
    border-color: black;
}

#container {
    border: 2px orange dashed;
    padding: 20px;
}

.top-nav {
    margin-bottom: 20px;
}
</style>
