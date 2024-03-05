import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rizzy-P | Pinoy Recipes with Love</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="globals.css" />
  <div className="recipe-container">
    <div className="content-wrapper">
      <img src="assets/logo.png" className="image-container-styles" />
    </div>
    <div className="recipe-card-container1">
      <div className="recipe-card-container2">
        <div className="featured-recipe-card">
          <div className="featured-recipe-card2">
            <div className="featured-recipe-card1">
              <p className="featured-title">Featured</p>
              <p className="highlighted-text">Adobong</p>
              <p className="highlighted-text1">Pusit</p>
            </div>
            <div className="recipe-button-container">
              <a href="#recipe" className="recipe-title-text-style">
                Show Recipe
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-filter-container">
        <div className="flex-container-with-filters">
          <input
            placeholder="Looking for more recipes?"
            type="text"
            className="input-container input-style-f62::placeholder"
          />
          <div className="red-box-with-centered-content">
            <img src="assets/search.png" />
          </div>
        </div>
        <div className="filter-options-container1">
          <div className="allergen-container">
            <div className="featured-recipe-card1">
              <img src="assets/filter.png" className="image-container" />
            </div>
            <p className="filter-title-text-style">Filters</p>
          </div>
          <div className="allergen-profile-container">
            <div className="allergen-container">
              <p className="allergens-title-text-style">Allergens</p>
              <p className="allergen-info-block">Type</p>
              <p className="allergen-info-block">Flavor</p>
              <p className="allergens-info-text-style">Skill Level</p>
            </div>
            <div className="ingredient-selection-container">
              <div className="vertical-flex-container2">
                <div className="featured-recipe-card1">
                  <div className="flex-container-with-image">
                    <div className="food-item-container1">
                      <input
                        id="fish"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="fish" className="food-item-label">
                      {" "}
                      Fish{" "}
                    </label>
                  </div>
                  <div className="meat-item-container">
                    <div className="food-item-container1">
                      <input
                        id="shrimp"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="shrimp" className="vegetable-label-style1">
                      {" "}
                      Shrimp{" "}
                    </label>
                  </div>
                </div>
                <div className="meal-card">
                  <div className="food-item-container1">
                    <input
                      id="peanuts"
                      type="checkbox"
                      className="hidden-input-checkbox"
                    />
                    <img className="hidden-icon img-content-66044729" />
                  </div>
                  <label htmlFor="peanuts" className="food-item-label">
                    {" "}
                    Peanuts{" "}
                  </label>
                </div>
              </div>
              <div className="food-menu-layout">
                <div className="filter-menu-container">
                  <div className="featured-recipe-card1">
                    <div className="flex-container-with-image">
                      <div className="food-item-container1">
                        <input
                          id="pork_1"
                          type="checkbox"
                          className="hidden-input-checkbox"
                        />
                        <img className="hidden-icon img-content-66044729" />
                      </div>
                      <label htmlFor="pork_1" className="food-label-style">
                        {" "}
                        Pork{" "}
                      </label>
                    </div>
                    <div className="meat-item-container">
                      <div className="food-item-container1">
                        <input
                          id="beef"
                          type="checkbox"
                          className="hidden-input-checkbox"
                        />
                        <img className="hidden-icon img-content-66044729" />
                      </div>
                      <label htmlFor="beef" className="food-label-style">
                        {" "}
                        Beef{" "}
                      </label>
                    </div>
                  </div>
                  <div className="meal-card">
                    <div className="food-item-container1">
                      <input
                        id="pancit"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="pancit" className="sour-label-style">
                      {" "}
                      Pancit{" "}
                    </label>
                  </div>
                </div>
                <div className="meal-options-container">
                  <div className="food-item-container">
                    <div className="food-item-container1">
                      <input
                        id="seafood"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="seafood" className="food-label-style">
                      {" "}
                      Seafood{" "}
                    </label>
                  </div>
                  <div className="vertical-card-with-image">
                    <div className="food-item-container1">
                      <input
                        id="chicken"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="chicken" className="food-label-style">
                      {" "}
                      Chicken{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flavor-options-container">
                <div className="flavor-options-container1">
                  <div className="food-item-container">
                    <div className="food-item-container1">
                      <input
                        id="sour"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="sour" className="sour-label-style">
                      {" "}
                      Sour{" "}
                    </label>
                  </div>
                  <div className="food-item-container">
                    <div className="food-item-container1">
                      <input
                        id="salty"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="salty" className="food-label-style">
                      {" "}
                      Salty{" "}
                    </label>
                  </div>
                  <div className="food-item-container">
                    <div className="food-item-container1">
                      <input
                        id="spicy"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="spicy" className="food-label-style">
                      {" "}
                      Spicy{" "}
                    </label>
                  </div>
                </div>
                <div className="seafood-wrapper">
                  <div className="food-item-container1">
                    <input
                      id="slightly sweet"
                      type="checkbox"
                      className="hidden-input-checkbox"
                    />
                    <img className="hidden-icon img-content-66044729" />
                  </div>
                  <label htmlFor="slightly sweet" className="food-label-style">
                    {" "}
                    Slightly Sweet{" "}
                  </label>
                </div>
              </div>
              <div className="vertical-flex-container1">
                <div className="vertical-flex-container">
                  <div className="food-item-container">
                    <div className="food-item-container1">
                      <input
                        id="beginner"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="beginner" className="food-label-style">
                      {" "}
                      Beginner{" "}
                    </label>
                  </div>
                  <div className="card-label-container">
                    <div className="food-item-container1">
                      <input
                        id="intermediate"
                        type="checkbox"
                        className="hidden-input-checkbox"
                      />
                      <img className="hidden-icon img-content-66044729" />
                    </div>
                    <label htmlFor="intermediate" className="food-label-style">
                      {" "}
                      Intermediate{" "}
                    </label>
                  </div>
                </div>
                <div className="meal-card">
                  <div className="food-item-container1">
                    <input
                      id="advanced"
                      type="checkbox"
                      className="hidden-input-checkbox"
                    />
                    <img className="hidden-icon img-content-66044729" />
                  </div>
                  <label htmlFor="advanced" className="food-label-style">
                    {" "}
                    Advanced{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="ingredient-info-panel">
              <div className="meal-item-container">
                <div className="food-item-container1">
                  <input
                    id="pork"
                    type="checkbox"
                    className="hidden-input-checkbox"
                  />
                  <img className="hidden-icon img-content-66044729" />
                </div>
                <label htmlFor="pork" className="food-item-label">
                  {" "}
                  Pork{" "}
                </label>
              </div>
              <div className="food-item-container2">
                <div className="food-item-container1">
                  <input
                    id="vegetable"
                    type="checkbox"
                    className="hidden-input-checkbox"
                  />
                  <img className="hidden-icon img-content-66044729" />
                </div>
                <label htmlFor="vegetable" className="food-label-style">
                  {" "}
                  Vegetable{" "}
                </label>
              </div>
              <div className="spicy-label-container">
                <div className="food-item-container1">
                  <input
                    id="slightly spicy"
                    type="checkbox"
                    className="hidden-input-checkbox"
                  />
                  <img className="hidden-icon img-content-66044729" />
                </div>
                <label htmlFor="slightly spicy" className="food-label-style">
                  {" "}
                  Slightly Spicy{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-card-container">
        <div className="recipe-card-list1">
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/chicken_tinola_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Chicken</p>
              <p className="recipe-title-style">Chicken Tinola</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">45 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/bangus_sisig_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Seafood</p>
              <p className="recipe-title-style">Bangus Sisig</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">20 minutes | 3-4 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img className="recipe-card-img" src="assets/laing_landing.jpg" />
            <div className="recipe-card1">
              <p className="protein-type-label">Vegetable</p>
              <p className="recipe-title-style">Laing</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">45 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/pork_binagoongan_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Pork</p>
              <p className="recipe-title-style">Pork Binagoongan</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">45 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/pancit_malabon_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Pancit</p>
              <p className="recipe-title-style">Pancit Malabon</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">30 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/adobong_pusit_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Seafood</p>
              <p className="recipe-title-style">Adobong Pusit</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">30 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/dinuguan_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Pork</p>
              <p className="recipe-title-style">Dinuguan</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">1 hour | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card">
            <img
              className="recipe-card-img"
              src="assets/gising_gising_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Pork and Vegetable</p>
              <p className="recipe-title-style">Gising-Gising</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">30 minutes | 4-6 serves</p>
            </div>
          </div>
        </div>
        <div className="recipe-card-list">
          <div className="recipe-card protein-recipe-card recipe-card:first-child">
            <img
              className="recipe-card-img"
              src="assets/bicol_express_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Pork</p>
              <p className="recipe-title-style">Bicol Express</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">45 minutes | 4-6 serves</p>
            </div>
          </div>
          <div className="recipe-card protein-recipe-card">
            <img
              className="recipe-card-img"
              src="assets/kare_kareng_buntot_ng_baka_landing.jpg"
            />
            <div className="recipe-card1">
              <p className="protein-type-label">Beef</p>
              <p className="recipe-title-style">Kare-Kareng Buntot ng Baka</p>
              <button className="recipe-button">view recipe</button>
              <p className="recipe-info">2 hours | 6-8 serves</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  );
}
