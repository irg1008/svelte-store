import { onMount } from "svelte";

const useInterval = (
	cb: () => void,
	ms: number,
): {
	resetInterval: () => void;
} => {
	let interval: NodeJS.Timer;

	const initInterval = () => (interval = setInterval(cb, ms));
	const removeInterval = () => clearInterval(interval);

	const resetInterval = () => {
		removeInterval();
		initInterval();
	};

	onMount(() => {
		initInterval();
		return () => removeInterval();
	});

	return { resetInterval };
};

export { useInterval };
