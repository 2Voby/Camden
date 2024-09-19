const { createApp, ref } = Vue;
document.addEventListener("DOMContentLoaded", async function () {
	const response = await fetch("./../schools.json");
	let schools = await response.json();
	const urlParams = new URLSearchParams(window.location.search);

	let schoolId = urlParams.get("schoolId");
	if (!schoolId) {
		schoolId = 0;
	}
	let school = ref(
		schools.find((el) => {
			return el.schoolId == schoolId;
		})
	);
	let showComparisonsInfo = ref(false);

	createApp({
		setup() {
			return { school, showComparisonsInfo };
		},
	}).mount("#achievementPage");

	const checkbox = document.querySelector("#switch1");

	checkbox.addEventListener("change", function () {
		if (checkbox.checked) {
			showComparisonsInfo.value = true;
		} else {
			showComparisonsInfo.value = false;
		}
	});
});
