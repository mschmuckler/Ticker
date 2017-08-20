# Component Hierarchy

**AuthFormContainer**
  * AuthForm

**NavbarContainer**
  * Navbar
    - NavbarSearch
    - NavbarIndices

**PortfolioAsideContainer**
  * PortfolioAside
    - PortfolioAsideItem

**PortfolioContainer**
  * Portfolio
    - PortfolioItem
    - PortfolioAddForm

**StockShow**
  * StockDetailsContainer
    - StockDetails
  * ArticlesIndexContainer
    - ArticlesIndex
      + ArticlesIndexItem

**ArticleShowContainer**
  * ArticleShow

**ArticleFormContainer**
  * ArticleForm


# Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/portfolio" | "PortfolioContainer" |
| "/stock/:ticker" | "StockShow" |
| "/articles/:articleId" | "ArticleShowContainer" |
| "/articles/new" | "ArticleFormContainer" |
