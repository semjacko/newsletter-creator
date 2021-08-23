const NewsletterView = ({images, width, color, imageHighlights, maxWidth, maxHeight}) => {
    let rows = [];

    let len = images.length, i = 0;
    while (i < len) {
        let currWidth = 0;
        let currRow = [];
        while (currWidth < width) {
            currWidth += images[i].width;
            currRow.push(
                <div key={i} style={{position: 'relative', width: images[i].width * (maxWidth / width)}}>
                    <img src={images[i].src} alt={''} style={{width: images[i].width * (maxWidth / width), height: 'auto'}}/>
                    {/*
                    <div style={{position: 'absolute', display: 'flex', width: images[i].width * (maxWidth / width), top: 0, height: images[i].height, backgroundColor: 'rgba(0,0,0,0.0)', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white'}}>
                        <span className={'rounded-circle'} style={{backgroundColor: '#ff00f0', padding: 5}}>{i+1}</span>
                    </div>
                    */}
                </div>
            )
            i++;
        }
        rows.push(<div key={i} style={{width: maxWidth, display: 'flex'}}>{currRow}</div>)
    }

    return (
        <div className='border' style={{marginTop: 10, maxHeight: maxHeight, maxWidth: maxWidth, overflowY: 'auto', overflowX: 'hidden'}}>
            {rows}
        </div> 
    );
}

export { NewsletterView };