import axios from "axios";

const API_BASE_URL = "http://localhost:8221/api/wp-json/wp/v2";
const LOCAL_JSON_URL = "/api/wp-content/uploads/full_data.json";

class WordPressApi {
    constructor(baseUrl = API_BASE_URL) {
        this.baseUrl = baseUrl;
        this.client = axios.create({
            baseURL: this.baseUrl,
        });
    }

    /**
     * Загрузка данных из локального JSON-файла
     * @returns {Promise<any>} - Данные из JSON-файла
     */
    async loadLocalData() {
        try {
            const response = await axios.get(LOCAL_JSON_URL); // Используем прямой запрос к файлу
            return response.data;
        } catch (error) {
            console.error("Error loading local data:", error);
            throw error;
        }
    }

    /**
     * Получение данных страницы по ID или slug из JSON
     * @param {number|string} value - ID или slug страницы
     * @param {string} key - Ключ для поиска ("id" или "slug")
     * @returns {Promise<any>} - Данные страницы
     */
    async getPageDataFromJson(value, key = 'id') {
        const data = await this.loadLocalData();
        const page = data.pages.find(page => page[key] === value);

        if (!page) {
            throw new Error(`Страница с ${key} "${value}" не найдена`);
        }
        return page;
    }

    /**
     * Получение данных записи (поста) по ID из JSON
     * @param {number} id - ID записи
     * @returns {Promise<any>} - Данные записи
     */
    async getPostDataFromJson(value, key = 'id') {
        const data = await this.loadLocalData();
        const post = data.posts.find(post => post[key] === value);
        if (!post) {
            throw new Error(`Пост с ID ${value} не найден`);
        }
        return post;
    }

    /**
     * Получение списка всех записей из JSON
     * @returns {Promise<any[]>} - Список всех записей
     */
    async getAllPostsFromJson() {
        const data = await this.loadLocalData();
        return data.posts || [];
    }

    /**
     * Получение всех категорий из JSON
     * @returns {Promise<any[]>} - Список всех категорий
     */
    async getAllCategoriesFromJson() {
        const data = await this.loadLocalData();
        return data.categories || [];
    }

}

export default WordPressApi;
