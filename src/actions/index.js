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
	displayInitAuthModal,
	setLoginModalOpen,
	setBurgerMenuStatus,
} from './app';

export {
	fetchPaginatedNews,
	setPaginatedNews,
	setPaginatedNewsHaveMore,
	setLoadingArticles,
	refreshNews,
	clearNews,
	fetchArticle,
	setArticle,
	setNewsError,
	incrementArticleClick,
} from './news';
