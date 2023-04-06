# Art Gallery Website

<table>
    <tr>
    <td><img src="/assets/art-gallery-image-desktop.png"></td>
    </tr>
</table>

## Table of contents

- [Description](#description)
- [Features](#features)
- [Live Site](#live-site)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Description

This project is a two-page art gallery website that showcases photos from an art gallery and provides an introductory description of the art gallery on one page and a leaflet map of its location, and textual data of the location on a second page. The art-gallery website was created with HTML, CSS, JavaScript, and Leaflet JS, and deployed with Netlify. The design files, assets, and feature requirements for this project are provided by Frontend Mentor, a professional platform that provides design and project briefs to build projects with.

### Features

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- View a location map with custom location pin

### Live Site

[Live Site](https://modern-art-gallery-website-aishabu.netlify.app/)

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

## Author

- Website - [AishaBu Portfolio](https://aishabu-portfolio.netlify.app/)
