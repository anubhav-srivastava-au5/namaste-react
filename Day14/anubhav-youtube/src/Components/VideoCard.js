const VideoCard = ({ info }) => {
    console.log(info, "---------card details");
    const { snippet, statistics } = info;
    const { channelTitle, title, publishedAt, thumbnails } = snippet;
    let currentTime = new Date();
    let givenTime = new Date(publishedAt);
    let timeDifference = currentTime - givenTime;
    let hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    // console.log(hoursAgo + ' hours ago');
    return (
        <div className="p-2 m-2 w-96 rounded-lg">
            <img className="rounded-lg" alt="thumbnail-image" src={thumbnails.medium.url} />
            <ul className="py-2">
            <li className="font-bold py-2">{title}</li>
                <li className="font-light">{channelTitle}</li>
                <li className="font-light">{statistics.viewCount} views</li>
                <li className="font-light">{hoursAgo + ' hours ago'}</li>
            </ul>
        </div>
    )
}

export default VideoCard