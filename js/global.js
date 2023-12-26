/* 
    Group Members:
    1. Bibishan Pandey
    2. Channpreet Singh
    3. Rupesh Shrestha.
    4. Kabita Shrestha

    Project: Terrace Fitness Club
    Course: CSD 1103 - Web Development
    Author: Bibishan Pandey
*/

/**
 * Menu Toggler Method to enable and disable the menu in navigation bar
 */
function menuToggler() {
	const x = document.getElementById("navigations");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}