const commitHistory = new commitHistory({
	auth: ‘TOKEN’ //need to get
})


await commitHistory.request(‘GET /repos/{owner}/{repo}/commits’, {
	owner: ‘ucfopen’,
	repo: ‘UDOIT’,
	headers: {
		‘X-Github-Api-Version’: ‘2026-03-10’
	}
}