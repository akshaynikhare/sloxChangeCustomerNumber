const { Application } = Shopware;

import SloxService from '../core/service/api/slox.service';

Application.addServiceProvider('SloxService', (container) => {
    const initContainer = Application.getContainer('init');

    return new SloxService(initContainer.httpClient, container.loginService);
});
