# Art Gallery Website Solution

## Table of contents

- [Description](#description)
  - [Features](#features)
  <!-- [Screenshot](#screenshot)
  - [Links](#links)-->
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Description

This project builds a two-page art gallery website that showcases photos from an art gallery on one page and provides text description of the art gallerys and a map of its location on a second page. For the project, Frontend Mentor provides the design files with either Figma or Sketch, starter code, which includes plain text and any assests such as optimized images or font files in an assets folder, the images are already exported for the correct screen size and optimized, and the prompt which explains what features the project should have. You are free to use whatever tools you would like to build the project, and are challenged to use Leaflet to create an interactive location map of the art gallery rather than using the image of a map.

### Features

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- View a location map with custom location pin

<!--### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
-->

## My process

### Built with

- Semantic HTML5 markup <br>
- CSS custom properties <br>
- Flexbox<br>
- CSS Grid<br>
- Mobile-first workflow<br>
- JavaScript<br>
- [Prettier Code Formatter VS Extension](https://prettier.io/)<br>
- [Leaflet JS Map Library](https://leafletjs.com/)<br>
- [Visual Studio Code IDE](https://code.visualstudio.com/)<br>

### What I learned

I learned how to use CSS variables,(CSS custom properties), how to use media queries in html along with the picture element to pick the best image size and based on users device width. I also learned more Leaflet features, such as how to use a custom marker in place of the default marker, and how to change positioning of the zoom controls.

HTML Picture Element with CSS Media Queries

```HTML Picture Element with CSS Media Queries
{
       <picture>
          <source srcset="
          /assets/tablet/image-hero.jpg 1x,
          /assets/tablet/image-hero@2x.jpg 2x" media="(min-width: 690px)" />

          <source srcset="
          /assets/desktop/image-hero.jpg 1x,
          /assets/desktop/image-hero@2x 2x" media="(min-width: 1000px)" />

          <img srcset="
          /assets/mobile/image-hero.jpg 1x,
          /assets/mobile/image-hero@2x.jpg 2x"
            alt="A black and white canvas art piece of an old woman looking ahead, not smiling, with rust brown glasses"
            id="hero-old-woman-image" />
        </picture>
  }
```

CSS Variables (CSS Custom Properties)

```CSS Variables (CSS Custom Properties)
{
  :root {
    --big-shoulders-font: "Big Shoulders Display", cursive;
    --outfit-light-font: "Outfit", sans-serif;
    --almost-black-color: #151515;
    --dark-gray-color: #444444;
    --white-color: #ffffff;
    --gold-color: #d5966c;
      }
}
```

<!--
## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
  -->
