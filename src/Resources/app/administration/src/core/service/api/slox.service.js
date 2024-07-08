const ApiService = Shopware.Classes.ApiService;

class SloxService extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'slox_service') {
        super(httpClient, loginService, apiEndpoint);
    }

    searchCustomer( customerNumber ) {
        const apiRoute = `${this.getApiBasePath()}/searchCustomer`;
        return this.httpClient.post(
            apiRoute,
            {   
                customerNumber,
                headers: this.getBasicHeaders()
            }
        ).then((response) => {
            return ApiService.handleResponse(response);
        });
    }
}

export default SloxService;