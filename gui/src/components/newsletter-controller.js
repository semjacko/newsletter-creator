import { saveAs } from 'file-saver';
import { NEWSLETTER_HTML } from '../assets/constants';
const zip = require('jszip')();
const zipUtils = require('jszip-utils');

const tryWidth = (width, images) => {
    let i = 0;
    
    while (i < images.length) {
        let currRowWidth = 0;
        let j = i;

        // try create a row of images
        while (j < images.length && currRowWidth < width) {
            currRowWidth += images[j].width;
            // if images in same row dont have same height
            if (j > i && images[j].height !== images[j-1].height) {
                return false;
            }
            j++;
        }
        
        i = j;

        // current row width different than required
        if (currRowWidth !== width) {
            return false;	
        }
    
    }

    return true;
}

const detectWidths = (images) => {
    // at the beginning try one image in the first row
    // continues to second row and inserts pictures until the are == current width, 
    // if they exceed the width, try two images in the first row etc...
    
    let width = 0,
        widths = [],
        i = 0;

    while (i < images.length) {
        width += images[i].width;

        // try create newsletter with a given width
        if (tryWidth(width, images)) {
            widths.push(width);
        }

        i++;
    }

    return widths;
}

const createNL = (images, width, links, title, textColor, backgroundColor) => {
    let nImages = images.length,
        i = 0,
        html = `<table role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%">`;

    while (i < nImages) {
        html += `<tr><td><table cellSpacing="0" cellPadding="0" border="0"><tr>`;
        let rowWidth = images[i].width;

        if (rowWidth > width) {
            i++;
        }

        while (i < nImages && rowWidth <= width) {
            html += `<td>`;

            if (links[i]) {
                html += `<a href="${links[i]}"><img src="images/image${String(i+1).padStart(2, '0')}.jpg" alt="" width=${images[i].width} style="width:100%; max-width:${images[i].width}px; height:auto; display:block;"></a>`;
            } else {
                html += `<img src="images/image${String(i+1).padStart(2, '0')}.jpg" alt="" width=${images[i].width} style="width:100%; max-width:${images[i].width}px; height:auto; display:block;">`;
            }

            html += `</td>`;
            i++;

            if (i < nImages) {
                rowWidth += images[i].width;
            }
        }
        html += `</tr></table></td></tr>`;
    }

    html += `</table>`;

    let htmltext = NEWSLETTER_HTML(title, html, backgroundColor, textColor);

    return htmltext;
}

const getDataFromUrl = (url) => {
	return new Promise((resolve, reject) => {
		zipUtils.getBinaryContent(url, (err, data) => {
			if(err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

const getCurrentDate = (pretty=false) => {
    let today = new Date();  

    let dd = today.getDate(),
        mm = today.getMonth() + 1,
        yyyy = today.getFullYear();
    
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;
    
    if (pretty) {
        return `${dd}. ${mm}. ${yyyy}`;
    } else {
        return `${yyyy}${mm}${dd}`;
    }
}

const createZip = async (html, images) => {
	zip.file('index.html', html);
    let imgFolder = zip.folder('images');

    for (let i = 0; i < images.length; i++) {
		let data = await getDataFromUrl(images[i].src);
		imgFolder.file( `image${String(i+1).padStart(2, '0')}.jpg`, data, {binary:true});
	}

    zip.generateAsync({type:'blob'}).then((content) => {
		saveAs(content, `newsletter${getCurrentDate()}.zip`);
	});
}

export { detectWidths, createNL, createZip, getCurrentDate };