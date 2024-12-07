import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --max-width: 1660px;
    --line-height-sm: 1.4;
    --line-height-md: 1.6;
    --line-height-lg: 1.8;
    --cubic-bezier-primary: cubic-bezier(1, 0, 0.2, 1);
    --mint-900: #70d7bf;
    --mint-700: #8ddfcc;
    --midnight-900: #05141f;
    --midnight-100: #cdd0d2;
    --red: #ff0900;
    --blue: #4296e4;
    --gray-700: #37434c;
    --gray-500: #697278;
    --gray-400: #82898f;
    --gray-300: #b4b9bc;
    --gray-200: #cdd0d2;
    --gray-100: #e6e8e9;
    --gray-50: #f6f6f9;
    --gray-10: #f8f8f8;
  }

  @media (max-width: 743px) {
    :root {
      font-size: 14px;
      --px-md: 16px;
      --px-lg: 24px;
      --px-xlg: 32px;
      --input-md: 40px;
      --input-md-fsize: 16px;
      --textarea-md: 140px;
      --space-xsm: 8px;
      --space-xsm2: 8px;
      --space-sm: 12px;
      --space-sm2: 12px;
      --space-md: 16px;
      --space-md2: 20px;
      --space-md3: 20px;
      --space-box: 48px;
      --space-box2: 120px;
      --heading-2: 20px;
      --heading-2-margin: 48px 0 16px;
      --heading-4: 16px;
      --heading-4-margin: 20px 0 4px;
      --heading-info: 16px;
      --heading-box: 18px;
      --btn-md: 36px;
      --btn-xlg: 48px;
      --btn-xlg2: 40px;
      --btn-xxlg: 72px;
      --btn-xxlg-size: 16px;
      --ic-sm: 20px;
      --ic-md: 24px;
      --ic-lg: 32px;
      --ic-xlg: 40px;
      --ic-xlg2: 32px;
      --ic-xxlg: 64px;
      --header-height: 56px;
      --footer-height: 284px;
      --side-padding: 24px;
      --bottom-padding: 80px;
      --h1-height: 124px;
      --h1-fsize: 24px;
      --h1-fsize-sm: 14px;
      --tab-fsize: var(--font-size);
      --search-bar-width: 100%;
    }
  }

  @media (min-width: 744px) and (max-width: 1023px) {
    :root {
      font-size: 16px;
      --px-md: 16px;
      --px-lg: 32px;
      --px-xlg: 56px;
      --input-md: 48px;
      --input-md-fsize: 16px;
      --textarea-md: 140px;
      --space-xsm: 8px;
      --space-xsm2: 12px;
      --space-sm: 14px;
      --space-sm2: 16px;
      --space-md: 24px;
      --space-md2: 24px;
      --space-md3: 24px;
      --space-box: 64px;
      --space-box2: 120px;
      --heading-2: 24px;
      --heading-2-margin: 48px 0 24px;
      --heading-4: 18px;
      --heading-4-margin: 24px 0 8px;
      --heading-info: 18px;
      --heading-box: 20px;
      --btn-md: 44px;
      --btn-xlg: 52px;
      --btn-xlg2: 48px;
      --btn-xxlg: 80px;
      --btn-xxlg-size: 16px;
      --ic-sm: 24px;
      --ic-md: 28px;
      --ic-lg: 32px;
      --ic-xlg: 48px;
      --ic-xlg2: 48px;
      --ic-xxlg: 80px;
      --header-height: 56px;
      --footer-height: 296px;
      --side-padding: 48px;
      --bottom-padding: 80px;
      --h1-height: 160px;
      --h1-fsize: 40px;
      --h1-fsize-sm: 14px;
      --tab-fsize: var(--font-size);
      --search-bar-width: 400px;
    }
  }
      @media (min-width: 1024px) and (max-width: 1439px) {
	:root {
		font-size: 18px;
		--px-md: 20px;
		--px-lg: 40px;
		--px-xlg: 64px;
		--input-md: 48px;
		--input-md-fsize: 14px;
		--textarea-md: 140px;
		--space-xsm: 12px;
		--space-xsm2: 16px;
		--space-sm: 20px;
		--space-sm2: 16px;
		--space-md: 24px;
		--space-md2: 24px;
		--space-md3: 32px;
		--space-box: 48px;
		--space-box2: 160px;
		--heading-2: 24px;
		--heading-2-margin: 48px 0 24px;
		--heading-4: 18px;
		--heading-4-margin: 24px 0 8px;
		--heading-info: 20px;
		--heading-box: 20px;
		--btn-md: 48px;
		--btn-xlg: 56px;
		--btn-xlg2: 56px;
		--btn-xxlg: 80px;
		--btn-xxlg-size: 18px;
		--ic-sm: 24px;
		--ic-md: 32px;
		--ic-lg: 48px;
		--ic-xlg: 48px;
		--ic-xlg2: 56px;
		--ic-xxlg: 80px;
		--header-height: 80px;
		--footer-height: 176px;
		--side-padding: 48px;
		--bottom-padding: 80px;
		--h1-height: 192px;
		--h1-fsize: 48px;
		--h1-fsize-sm: 16px;
		--tab-fsize: 20px;
		--search-bar-width: 480px;
		--gallery-list-length: 3;
		--gallery-list-space: var(--space-md);
		--gallery-list-title-space: 16px;
		--gallery-list-title-size: 18px;
		--list-more-size: 18px;
	}
}
@media (min-width: 1440px) {
	:root {
		font-size: 18px;
		--px-md: 24px;
		--px-lg: 48px;
		--px-xlg: 76px;
		--input-md: 56px;
		--input-md-fsize: 18px;
		--textarea-md: 200px;
		--space-xsm: 16px;
		--space-xsm2: 16px;
		--space-sm: 20px;
		--space-sm2: 20px;
		--space-md: 32px;
		--space-md2: 28px;
		--space-md3: 32px;
		--space-box: 64px;
		--space-box2: 160px;
		--heading-2: 24px;
		--heading-2-margin: 64px 0 24px;
		--heading-4: 20px;
		--heading-4-margin: 28px 0 12px;
		--heading-info: 24px;
		--heading-box: 24px;
		--btn-md: 48px;
		--btn-xlg: 56px;
		--btn-xlg2: 56px;
		--btn-xxlg: 80px;
		--btn-xxlg-size: 18px;
		--ic-sm: 24px;
		--ic-md: 32px;
		--ic-lg: 48px;
		--ic-xlg: 56px;
		--ic-xlg2: 64px;
		--ic-xxlg: 96px;
		--header-height: 80px;
		--footer-height: 176px;
		--side-padding: 48px;
		--bottom-padding: 96px;
		--h1-height: 222px;
		--h1-fsize: 56px;
		--h1-fsize-sm: 18px;
		--tab-fsize: 20px;
		--search-bar-width: 480px;
		--gallery-list-length: 3;
		--gallery-list-space: var(--space-md);
		--gallery-list-title-space: 20px;
		--gallery-list-title-size: 20px;
		--list-more-size: 18px;
	}
  }
  * {
	box-sizing: border-box;
	-webkit-tap-highlight-color: rgba(112, 215, 191, 0.08);
}
html {
	height: 100%;
}
body {
	min-width: 360px;
	margin: 0;
}
button {
  border : none;
  padding : 0;
	background-color: transparent;
}
em{
  font-style: normal;
}
`;

export default GlobalStyle;