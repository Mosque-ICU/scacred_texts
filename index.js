import { getRandomHadith } from './main/hadith';
import axios from 'axios';
import { capitalFirstLetter } from './util/capitalFirstLetter';

const baseUrl =
	'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';

export async function listAvailableEditions({
	language,
	limit,
}) {
	const endpoint = '/editions';
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error listing available editions:',
			error
		);
		throw error;
	}
}

export async function getMinifiedEditions({
	language,
	limit,
}) {
	const endpoint =
		'/editions.min.json';
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting minified editions:',
			error
		);
		throw error;
	}
}

export async function getHadithByEdition({
	editionName,
	language,
	limit,
}) {
	const endpoint = `/editions/${editionName}`;
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting hadith by edition:',
			error
		);
		throw error;
	}
}
export async function getHadithByEdition({
	editionName,
	language,
	limit,
}) {
	const endpoint = `/editions/${editionName}`;
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting hadith by edition:',
			error
		);
		throw error;
	}
}

export async function getSpecificHadith({
	editionName,
	HadithNo,
	language,
	limit,
}) {
	const endpoint = `/editions/${editionName}/${HadithNo}.json`;
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting specific hadith:',
			error
		);
		throw error;
	}
}

export async function getMinifiedSpecificHadith({
	editionName,
	HadithNo,
	language,
	limit,
}) {
	const endpoint = `/editions/${editionName}/${HadithNo}.min.json`;
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting minified specific hadith:',
			error
		);
		throw error;
	}
}

export async function getSectionByNumber({
	editionName,
	sectionNo,
	language,
	limit,
}) {
	const endpoint = `/editions/${editionName}/sections/${sectionNo}.json`;
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		let filteredData = response.data;
		if (language) {
			filteredData =
				filteredData.filter(
					(item) =>
						item.language ===
						capitalFirstLetter(
							language
						)
				);
		}
		return limit
			? filteredData.slice(0, limit)
			: filteredData;
	} catch (error) {
		console.error(
			'Error getting section by number:',
			error
		);
		throw error;
	}
}

export async function getHadithBookDetails({
	language,
	limit,
}) {
	const endpoint = '/info.json';
	const url = `${baseUrl}${endpoint}`;
	try {
		const response = await axios.get(
			url
		);
		const bookDetails = response.data;
		// You can choose whether to filter by language here, as 'info.json' might not contain a 'language' field
		return limit
			? [bookDetails].slice(0, limit)
			: [bookDetails];
	} catch (error) {
		console.error(
			'Error getting hadith book details:',
			error
		);
		throw error;
	}
}

export async function randomHadith({
	language,
	limit,
}) {
	const hadithList = [];

	while (hadithList.length < limit) {
		const result =
			await getRandomHadith({
				language,
			});

		// Check if the fetched Hadith matches the specified language
		if (
			result.language ===
			capitalFirstLetter(language)
		) {
			hadithList.push(result);
		}

		// Break out of the loop if the limit is reached
		if (hadithList.length >= limit) {
			break;
		}
	}

	return hadithList;
}
