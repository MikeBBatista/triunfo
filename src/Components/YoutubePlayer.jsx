import React from "react";
import PropTypes from "prop-types";

const YoutubePlayer = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="SINA Video"
        />
    </div>
);

YoutubePlayer.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubePlayer;