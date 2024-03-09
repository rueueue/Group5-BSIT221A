import Link from "next/link";

export default function RecipeHome() {
  return (
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
          <img className="recipe-card-img" src="assets/dinuguan_landing.jpg" />
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
  );
}
