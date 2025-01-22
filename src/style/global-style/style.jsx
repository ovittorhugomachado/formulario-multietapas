import { createGlobalStyle } from "styled-components";
import { MediaSizes } from "../media-sizes/media-sizes";

export const Styles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "ubuntu", sans-serif;
    font-weight: 300;
    list-style: none;
    font-style: none;
    --primary-color: hsl(213, 96%, 18%);
    --secondary-color: hsl(231, 11%, 63%);
    --purple: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);  
    --background-body: hsl(229, 24%, 87%);
    --error-color: hsl(354, 84%, 57%);
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0 auto;
  background-color: "var(--background-body)";
}

a {
  text-decoration: none;
}

h1 {
color: var(--primary-color);
font-weight: 700;
     @media (max-width: ${MediaSizes.mobile}) {
        font-size: 25px ;    
    }
}

h2 {
     color: var(--secondary-color);
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0 45px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        margin-bottom: 20px     
    };
     @media (max-width: ${MediaSizes.mobile}) {
        font-size: 15px ;    
    }
}

h3 {
    font-size: 18px;
    color: hsl(213, 96%, 18%);
    @media (max-width: ${MediaSizes.tablet}) {
        margin-top: 0; 
    };
}

h4 {
    font-size: 14px;
    font-weight: 200;
    color: hsl(213, 96%, 18%);
}


label {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 400;
    @media (max-width: ${MediaSizes.mobile}) {
        font-size: 15px ;    
    }
}

input {
    height: 42px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--secondary-color);
    padding-left: 20px;
    margin-bottom: 24px;
    font-weight: 400;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        margin-bottom: 14px ;
        padding-left: 15px;    
    };
    @media (max-width: ${MediaSizes.mobile}) {
        height: 33px ;    
    }
}


`