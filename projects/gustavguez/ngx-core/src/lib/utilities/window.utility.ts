export class WindowUtility {

	static isSmallScreen(): boolean {
		return window.innerWidth < 768;
	}

	static isNotSmallScreen(): boolean {
		return window.innerWidth >= 768;
	}
}
