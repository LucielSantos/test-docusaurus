/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  // exempleSidebar: [{ exemple: ['windows'] }]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  reactJsSidebar: [
    {
      type: 'category',
      label: 'Primeiros passos',
      collapsed: false,
      link: {
        type: 'generated-index',
        slug: 'react-js/getting-started',
        description: 'Dê os primeiros passos com a biblioteca Stardust!'
      },
      items: [
        'react-js/getting-started/installation'
      ]
    }
  ]
};

module.exports = sidebars;
