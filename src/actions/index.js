export {
	getUser,
	addUserSelectedCategories,
	setUserSelectedCategories,
	setUserSelectedCategoriesSuccess,
	setUserSelectedCategoriesError,
} from './user';

export {
	getAllCategories,
	setAllCategories,
} from './categories';

export {
	displayLoginCategorySelection,
	setLoginModalOpen,
	setBurgerMenuStatus,
} from './general';

export {
	fetchPaginatedNews,
	setPaginatedNews,
	setPaginatedNewsHaveMore,
	setLoadinArticles,
	refreshNews,
	clearNews,
	fetchArticle,
	setArticle,
	setNewsError,
} from './news';

export {
	fetchSMContent,
	setPaginatedSMContent,
	setPaginatedSMContentHaveMore,
} from './social-media';
