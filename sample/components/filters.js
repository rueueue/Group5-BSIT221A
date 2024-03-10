function Filter() {
  return (
    <div className="filter-options-container1">
      <div className="allergen-container">
        <div className="featured-recipe-card1">
          <img src="assets/filter.png" className="image-container" />
        </div>
        <p className="filter-title-text-style">Filters</p>
      </div>
      <div class="ingredient-selection-container">
        <div class="vertical-flex-container2">
          <div class="allergens-checkbox">
            <p>Allergens</p>
            <div>
              <input type="checkbox" id="fish" name="fish" />
              <label for="fish">Fish</label>
            </div>
            <div>
              <input type="checkbox" id="shrimp" name="shrimp" />
              <label for="shrimp">Shrimp</label>
            </div>
            <div>
              <input type="checkbox" id="peanuts" name="peanuts" />
              <label for="peanuts">Peanuts</label>
            </div>
            <div>
              <input type="checkbox" id="pork" name="pork" />
              <label for="pork">Pork</label>
            </div>
          </div>
        </div>

        <div class="type-checkbox">
          <p>Type</p>
          <div>
            <input type="checkbox" id="typepork" name="typepork" />
            <label for="typepork">Pork</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="beef" />
            <label for="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="pancit" name="pancit" />
            <label for="pancit">Pancit</label>
          </div>
          <div>
            <input type="checkbox" id="vegetable" name="vegetable" />
            <label for="vegetable">Vegetable</label>
          </div>
          <div>
            <input type="checkbox" id="seafood" name="seafood" />
            <label for="seafood">Seafood</label>
          </div>
          <div>
            <input type="checkbox" id="chicken" name="chicken" />
            <label for="chicken">Chicken</label>
          </div>
        </div>

        <div class="flavor-checkbox">
          <p>Flavor</p>
          <div>
            <input type="checkbox" id="sour" name="sour" />
            <label for="sour">Sour</label>
          </div>
          <div>
            <input type="checkbox" id="salty" name="salty" />
            <label for="salty">Salty</label>
          </div>
          <div>
            <input type="checkbox" id="spicy" name="spicy" />
            <label for="spicy">Spicy</label>
          </div>
          <div>
            <input type="checkbox" id="slightly-spicy" name="slightly-spicy" />
            <label for="slightly-spicy">Slightly Spicy</label>
          </div>
          <div>
            <input type="checkbox" id="slightly-sweet" name="slightly-sweet" />
            <label for="slightly-sweet">Slightly Sweet</label>
          </div>
        </div>

        <div class="skill-level-checkbox">
          <p>Skill Level</p>
          <div>
            <input type="checkbox" id="beginner" name="beginner" />
            <label for="beginner">Beginner</label>
          </div>
          <div>
            <input type="checkbox" id="intermediate" name="intermediate" />
            <label for="intermediate">Intermediate</label>
          </div>
          <div>
            <input type="checkbox" id="advanced" name="advanced" />
            <label for="advanced">Advanced</label>
          </div>
        </div>
      </div>
      <button className="filter-button">Filter out</button>
      <p>hello</p>
    </div>
  );
}

export default Filter;
