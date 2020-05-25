import * as moment from 'moment';

export const checkArticleContent = (initialContent) => {
	const check = initialContent.includes('<p>The post')
        && initialContent.includes(
        	'appeared first on <a rel="nofollow" href="https://infocity.az">InfoCity</a>.</p>'
        );
	if (check) {
		let start = initialContent.indexOf('<p>The post');
		const content = initialContent.substring(0, start - 1);
		return content;
	}
	return initialContent;
};

export const getDateFromObjectId = (objectId) => {
	const dateObj = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
	const date = moment(dateObj);

	const now = moment(new Date()); //todays date
	const duration = moment.duration(now.diff(date, 'days'), 'days');
	const days = duration.asDays();

	if (days < 2) {
		return date.fromNow();
	}
  
	return date.format('DD MMMM YYYY');
};
