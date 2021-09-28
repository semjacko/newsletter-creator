import { saveAs } from 'file-saver';
import { NEWSLETTER_HTML } from '../assets/constants';
const zip = require('jszip')();
const zipUtils = require('jszip-utils');

const tryWidth = (width, images) => {
    let i = 0;
    
    while (i < images.length) {
        let currRowWidth = 0;
        let j = i;

        // skus vytvorit riadok obrazkov
        while (j < images.length && currRowWidth < width) {
            currRowWidth += images[j].width;
            // ak obrazky v riadku nemaju rovnaku vysku
            if (j > i && images[j].height !== images[j-1].height) {
                return false;
            }
            j++;
        }
        
        i = j;

        if (currRowWidth !== width) {
            return false;	
        }
    
    }

    return true;
}

const detectWidths = (images) => {
    // vyskusa najprv v prvom riadku jeden obrazok
    // prejde do druheho, vklada obrazky dokedy nie su cca == doterajsia sirka, 
    // ak moc prekrocia skusi v prvom riadku 2 obrazky atd..
    
    let width = 0,
        widths = [],
        i = 0;

    while (i < images.length) {
        width += images[i].width;

        // skusi sa zostavit NL s danou sirkou
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

const createZip = async (html, images) => {
	zip.file('index.html', html);
    let imgFolder = zip.folder('images');

    for (let i = 0; i < images.length; i++) {
		let data = await getDataFromUrl(images[i].src);
		imgFolder.file( `image${String(i+1).padStart(2, '0')}.jpg`, data, {binary:true});
	}

    zip.generateAsync({type:'blob'}).then((content) => {
		saveAs(content, 'newsletter.zip');
	});
}

export { detectWidths, createNL, createZip };