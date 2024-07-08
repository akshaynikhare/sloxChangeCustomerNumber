<?php

namespace sloxchangecustomernumber\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;


class SloxController extends AbstractController
{

    private EntityRepository $customerRepository;

    /**
     * @internal
     */
    public function __construct(EntityRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    
    /**
     * @internal
     */
    #[Route(path: '/api/slox_service/searchCustomer', name: 'api.slox_service.searchCustomer', methods: ['POST'], defaults: ['_routeScope' => ['api']])]
    public function searchCustomer(Request $request): JsonResponse
    {
        // Get the customerNumber from the request
        $customerNumber = $request->get('customerNumber');

        if($customerNumber){
            $customer = $this->getCustomerByNumber($customerNumber);

            if ($customer) {
                // Customer found
                return new JsonResponse(['success' => true, 'customer' => $customer]);
            } else {
                // Customer not found
                return new JsonResponse(['success' => false, 'message' => 'Customer not found']);
            }
        }

       return new JsonResponse(['success' => false, 'message' => 'Customer Numeber not provideds'], JsonResponse::HTTP_NOT_FOUND);
       
    }

    /**
     * @internal
     */
    private function getCustomerByNumber(string $customerNumber)
    {
         // Create a criteria to filter by customer number
         $criteria = new Criteria();
         $criteria->addFilter(new EqualsFilter('customerNumber', $customerNumber));
 
         // Fetch the customer using the repository
         $customer = $this->customerRepository->search($criteria, Context::createDefaultContext())->first();
 
         // If customer is not found, you can return null or handle it accordingly
         return $customer;
    }

}
