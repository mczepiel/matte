/**
    module:"matte/ui/anchor.reel"
*/

/*global require,exports */
var AbstractLink = require("montage/ui/base/abstract-link").AbstractLink;

/**
 * Montage Anchor
 * @class module:"matte/ui/anchor.reel".Anchor
 * @extends module:"montage/ui/base/abstract-link.reel".AbstractLink
 */
exports.Link = AbstractLink.specialize(/** @lends AbstractLink# */{

    hasTemplate: {
        value: false
    },

    constructor: {
        value: function Link() {
            this.super();
            this.classList.add("matte-Link");
        }
    },

    draw: {
        value: function() {
            this.element.href = this.url;
            this.element.textContent = this.label;
            if (this.textAlternative) {
                this.element.setAttribute("title", this.textAlternative);
            }
            if (this.opensNewWindow) {
                this.element.setAttribute("target", "_blank");
            } else {
                this.element.removeAttribute("target");
            }
        }
    }
});