import { get_news } from '../api/api';
import createModule from './lib/createModule';

const [getNews, newsSaga, news] = createModule("news", get_news);

export { getNews, newsSaga };
export default news;