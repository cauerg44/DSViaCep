import RequestException from "./exceptions/request-exception.js"

export async function getJson(url) {
    try {
        const response = await fetch(url)
        const jsonBody = await response.json()
        return jsonBody
    }
    catch (e) {
        throw new Request("Erro ao realizar requisição")
    }
}