import createMenu from '../common.blocks/header/menu/menu.js'
import createFeaturedProject from '../common.blocks/main/featured-project/featured-project.js'
import createPortfolio from '../common.blocks/main/portfolio/portfolio.js'
import createPricingPlans from'../common.blocks/main/pricing-plans/pricing-plans.js'

document.addEventListener('DOMContentLoaded', function () {
    createMenu()
    createFeaturedProject()
    createPortfolio()
    createPricingPlans()
})