/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const sidebar = [
  {
    type: 'category',
    label: 'Primeiros passos',
    collapsed: false,
    link: {
      type: 'generated-index',
      slug: 'react-native/getting-started',
      description: 'Dê os primeiros passos com a biblioteca Stardust!'
    },
    items: [
      'react-native/getting-started/installation'
    ]
  }
]
  ;

module.exports = sidebar;
