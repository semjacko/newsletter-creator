const NewsletterView = ({images, links, width, backgroundColor, textColor, imageHighlights, showHeaderAndFooter, maxWidth, maxHeight}) => {
    let rows = [],
        i = 0;

    while (i < images.length) {
        let currWidth = 0,
            currRow = [],
            coeff = (maxWidth - 20) / width; // -20 for scrollbar

        while (currWidth < width) {
            currWidth += images[i].width;
            currRow.push(
                <div key={i} style={{position: 'relative', width: images[i].width * coeff, height: images[i].height * coeff, background: `url(${images[i].src})`, backgroundSize: 'cover'}}>
                    { imageHighlights &&
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', color: '#ff0ff0', fontWeight: 'bold', border: 'solid 1px'}}>
                            {i+1}
                        </div>
                    }
                </div>
            )
            i++;
        }
        rows.push(<div key={i} style={{width: maxWidth - 20, display: 'flex'}}>{currRow}</div>)
    }

    return (
        <div className='border' style={{marginTop: 10, maxHeight: maxHeight, maxWidth: maxWidth, overflowY: 'auto', overflowX: 'hidden'}}>
            {showHeaderAndFooter && <div style={{width: maxWidth - 20, backgroundColor: backgroundColor, color: textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20}}>header</div>}
            {rows}
            {showHeaderAndFooter && <div style={{width: maxWidth - 20, backgroundColor: backgroundColor, color: textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20}}>footer</div>}
        </div> 
    );
}

export { NewsletterView };