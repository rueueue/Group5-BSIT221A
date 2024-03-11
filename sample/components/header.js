import React from 'react';
import { useRouter } from 'next/router';
import Search from '@/components/search';
import styles from '@/styles/custom.module.scss'

function Header({ searchTerm, handleChange }) {
  const router = useRouter();
  
  const handleShowRecipeClick = () => {
    const recipeId = 6;
    router.push(`/${recipeId}`);
  };

  return (
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
                <p>pls</p>
              </div>
              <div className="recipe-button-container">
                <button onClick={handleShowRecipeClick} className={styles['custom-recipe-button']}>
                  Show Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-filter-container">
          <div className="flex-container-with-filters">
            <Search searchTerm={searchTerm} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
