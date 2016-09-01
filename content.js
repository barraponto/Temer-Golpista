/**
 * SUBSTITUIÇÕES
 */
var replacements = {
  'Presidente Michel Temer': 'Presidente Decorativo GOLPISTA',
  'Michel Temer': 'O GRANDE GOLPISTA',
  'impeachment': 'GOLPE',
  'Presidente Temer': 'Usurpador GOLPISTA',
  'Temer': 'GOLPISTA',
  'Primeiramente': 'Primeiramente, fora Temer',
  'fora Temer': 'fora Temer, fora GOLPISTA'
};

/**
 * ALGORITMO
 *
 * baseado em http://stackoverflow.com/questions/19871695/replacing-text-with-treewalker-in-a-chrome-extension
 */
var treewalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
var pattern = new RegExp(Object.keys(replacements).join('|'), 'gi');
var replace = function(match){ return replacements[match]; };

while (treewalker.nextNode()) {
  var node = treewalker.currentNode;
  node.nodeValue = node.nodeValue.replace(pattern, replace);
}
