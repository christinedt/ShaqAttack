var elements = document.getElementsByTagName('*');
var images = document.getElementsByTagName('img');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/sharks are/gi, 'Shaq is')
                                    .replace(/do sharks/gi, 'Does Shaq')
                                    .replace(/are sharks/gi, 'is Shaq')
                                    .replace(/sharks have/gi, 'Shaq has')
                                    .replace(/sharks were/gi, 'Shaq was')
                                    .replace(/sharks do/gi, 'Shaq does')
                                    .replace(/sharks|a shark|the shark|shark/gi, 'Shaq');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

for (var k = 0; k < images.length; k++) {
    var image = images[k];
    var altText;

    if (!image.alt) {
        altText = null;
    } else {
        altText = image.alt;
        var sharksInAlt = altText.match(/shark|sharks/gi);

        if (sharksInAlt) {
            image.style = "height: " + image.getAttribute('height') + "; "
                            + "width: " + image.getAttribute('width') + "; ";
            image.src = 'http://www.literaryramblings.com/wp-content/uploads/2012/04/shaq.jpg';
        }
    }
}