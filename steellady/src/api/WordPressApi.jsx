import axios from "axios";

const API_BASE_URL = "http://localhost:8221/api/wp-json/wp/v2";

class WordPressApi {
    constructor(baseUrl = API_BASE_URL) {
        this.baseUrl = baseUrl;
        this.client = axios.create({
            baseURL: this.baseUrl,
        });
    }

    /**
     * Получение данных страницы по ID
     * @param {number} id - ID страницы
     * @returns {Promise<any>} - Данные страницы
     */
    async getPageData(id) {
        try {
            const response = await this.client.get(`/pages/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching page data:", error);
            throw error;
        }
    }

    /**
     * Получение списка всех постов
     * @param {number} perPage - Количество постов на странице
     * @param {number} page - Номер страницы
     * @returns {Promise<any[]>} - Список постов
     */
    async getPosts(perPage = 10, page = 1) {
        try {
            const response = await this.client.get("/posts", {
                params: { per_page: perPage, page },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }

    /**
     * Получение данных записи (поста) по ID
     * @param {number} id - ID записи
     * @returns {Promise<any>} - Данные записи
     */
    async getPostData(id) {
        try {
            const response = await this.client.get(`/posts/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching post data:", error);
            throw error;
        }
    }
}

export default WordPressApi;
