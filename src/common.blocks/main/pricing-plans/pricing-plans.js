import tarrifs from "./tarrifs.js"

export default function createPricingPlans () {
    const pricingPlans = $('.pricing-plans__tariffs')
    const tariffsHTML = tarrifs.map((tariff) => {
        return (
        `
        <div class="pricing-plans__tariff">
            <div class="pricing-plans__tariff-name">${tariff.name}</div>
            <div class="pricing-plans__tariff-content">
                <div class="pricing-plans__tariff-price"><span class="pricing-plans__price-value"><sup class="pricing-plans__price-sup">$</sup>${tariff.price}</span>/mo</div>
                <ul class="pricing-plans__tariff-description">
                    <li class="pricing-plans__tariff-description-item">${tariff.logoDesign} Logo Design</li>
                    <li class="pricing-plans__tariff-description-item">${tariff.webSiteDesign} Website Design</li>
                    <li class="pricing-plans__tariff-description-item">${tariff.domainFree} Domain Free</li>
                    <li class="pricing-plans__tariff-description-item">${tariff.monthLicense} Month License</li>
                    <li class="pricing-plans__tariff-description-item">${tariff.GBStorage} GB Storage</li>
                </ul>
                <button class="pricing-plans__tariff-choose-btn">CHOOSE PLAN</button>
            </div>
        </div>
        `)
    })

    pricingPlans.append(tariffsHTML)
}