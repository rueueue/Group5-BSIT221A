function RecipePage(){
    return(
   <>
   <>
  <title>Recipes</title>
  <div className="navbar">
    <div className="img1-arrow">
      <img src="img/back.png" alt="" />
    </div>
    <div className="img2-logo">
      <img src="img/logo.png" alt="" />
    </div>
  </div>
  <div className="recipe-desc">
    <div className="img3-rcp">
      <img src="img/tinola.png" alt="" />
    </div>
    <div className="mobtab-flex">
      <div className="img4-rcp-mobtab">
        <img src="img/tinola-mobtab.png" alt="" />
      </div>
      <div className="title-serve">
        <div className="title">
          <h1>Chicken Tinola</h1>
        </div>
        <div className="serving">
          <span>Serving size: 4-6</span>
        </div>
      </div>
      <div className="infos">
        <div className="info1">
          <div className="ct">
            <b>Cooking Time:</b> <span>45minutes</span>
          </div>
          <div className="ai">
            <b>Allergen Information: </b> <span>Contain Fish (Fish Sauce)</span>
          </div>
        </div>
        <div className="info2">
          <div className="sl">
            <b>Skill Level:</b> <span>Beginner</span>
          </div>
          <div className="flav">
            <b>Flavor:</b>
            <span>Salty</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="line">
    <hr />
  </div>
  <div className="nutri">
    <div className="nutri-title">
      {" "}
      <h2>nutrition</h2> (estimated)
    </div>
    <div className="nutri-info">
      <ul>
        <li>
          <span>Calories &gt;</span> 250-300
        </li>
        <li>
          <span>Protein &gt;</span> 20-25g{" "}
        </li>
        <li>
          <span>Carbohydrates &gt;</span> 10-15g
        </li>
        <li>
          <span>Fat &gt;</span> 10-15g
        </li>
      </ul>
    </div>
  </div>
  <div className="ingredients">
    <div className="ingr-title">
      <h2>ingredients</h2>
    </div>
    <div className="ingr-info">
      <ul>
        <li>1 kg chicken, cut into serving pieces</li>
        <li>1 tablespoon oil</li>
        <li>1 onion, sliced</li>
        <li>2 cloves garlic, minced</li>
        <li>2 cloves garlic, minced</li>
        <li>1 green papaya, sliced</li>
        <li>1 cup malunggay leaves</li>
        <li>1 liter water</li>
        <li>Fish sauce and pepper to taste</li>
      </ul>
    </div>
  </div>
  <div className="alternative">
    <div className="alt-title">
      <h2>alternative ingredients</h2>
    </div>
    <div className="alt-info">
      <ul>
        <li>Tofu or mushrooms for a vegetarian version.</li>
        <li>
          Tamari or soy sauce as a fish sauce substitute for a vegetarian or
          fish-allergic option.
        </li>
      </ul>
    </div>
  </div>
  <div className="line">
    <hr />
  </div>
  <div className="preparation">
    <div className="prep-title">
      <h2>preparation</h2>
    </div>
    <div className="prep-info">
      <ul>
        <li>1. Sauté garlic, onion, and ginger in oil until fragrant.</li>
        <li>2. Add chicken, cook until browned.</li>
        <li>
          3. Pour in water, add papaya, and simmer until chicken is cooked.
        </li>
        <li>
          4. Season with fish sauce and pepper, then add malunggay leaves.
        </li>
      </ul>
    </div>
  </div>
  <div className="storage">
    <div className="stg-title">
      <h2>storage and reheating instruction</h2>
    </div>
    <div className="stg-info">
      <ul>
        <li>
          Store leftovers in an airtight container in the refrigerator for up to
          2 days.
        </li>
        <li>
          Reheat gently on the stovetop, adding a bit of water if needed to
          maintain the broth's consistency.
        </li>
      </ul>
    </div>
  </div>
  <div className="note">
    <div className="note-title">
      <h2>note:</h2>
    </div>
    <div className="note-info">
      <ul>
        <li>
          Enhance the aromatic profile of the Tinola by adding a handful of
          lemongrass stalks during the simmering process. Remove the lemongrass
          before serving. The subtle citrus notes will complement the ginger and
          elevate the overall flavor of this comforting Filipino dish. Adjust
          the seasoning with fish sauce and pepper according to your taste
          preference.
        </li>
      </ul>
    </div>
  </div>
  <div className="line">
    <hr />
  </div>
  <div className="browse">
    <div className="browse-btn">
      <h4>Browse more recipes</h4>
    </div>
  </div>
</>

        </>
    )
}
export default RecipePage