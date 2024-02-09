import { createHorizontslSlider } from "../horizontal-slider/horizontal-slider.js";

export default function createFeaturedProject () {
    const items = [
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."},
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."},
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."},
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."},
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."},
        {header: "Then they show that show to the people who make shows", text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."}
    ]

    const featuredProject = document.querySelector('.featured-project')

    createHorizontslSlider(featuredProject, items)
}