window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Utility to attach a time-synced caption rotation to a caption element and its row of videos
    var attachTimedCaption = function(captionElementId, captionsTimeline) {
        var el = document.getElementById(captionElementId);
        if (!el) return;
        var container = el.closest('.container');
        if (!container) return;
        var videos = container.querySelectorAll('video');
        if (!videos || videos.length === 0) return;
        var video = videos[0]; // drive timeline from the first video in the row

        var lastCaptionIndex = -1;
        var lastTime = 0;
        var updateCaptionByTime = function() {
            var t = video.currentTime || 0;
            if (t + 0.05 < lastTime) {
                lastCaptionIndex = -1;
            }
            var idx = Math.floor(t / 3) % captionsTimeline.length;
            if (idx !== lastCaptionIndex) {
                el.innerHTML = captionsTimeline[idx] || "";
                lastCaptionIndex = idx;
            }
            lastTime = t;
        };

        var initOnce = function() {
            updateCaptionByTime();
            video.removeEventListener('loadedmetadata', initOnce);
            video.removeEventListener('playing', initOnce);
        };
        video.addEventListener('loadedmetadata', initOnce);
        video.addEventListener('playing', initOnce);
        video.addEventListener('timeupdate', updateCaptionByTime);
    };

    // First row captions (maps to ./videos/flow_1.mp4, mardm_1.mp4, ours_1.mp4 timeline)
    attachTimedCaption('long-horizon-rotating-caption', [
        "1: A person is <span style='color:#06C755'>walking forward</span>.",
        "2: A person <span style='color:#06C755'>sits down on a chair</span>.",
        "3: A person <span style='color:#06C755'>turns around</span> and <span style='color:#DF1817'>walks backward</span>.",
        "4: A person <span style='color:#06C755'>is picking up his toolbox</span>.",
        "5: A person <span style='color:#06C755'>does a jumping jack motion</span>.",
        "6: The man <span style='color:#06C755'>is lifting both arms</span>.",
        "7: A person <span style='color:#06C755'>slowly jumped forward</span>."
    ]);

    // Second row captions (your provided text_list) for the next videos row
    attachTimedCaption('long-horizon-rotating-caption-2', [
        "1: A person <span style='color:#06C755'>is jumping on one foot</span>.",
        "2: A person <span style='color:#06C755'>walks like a zombie</span>.",
        "3: A person <span style='color:#06C755'>pretend to hold a ball in the right hand</span>, <span style='color:#DF1817'>toss the ball upward</span>.",
        "4: A person <span style='color:#06C755'>walks while holding onto a handrail</span>.",
        "5: A person <span style='color:#06C755'>kicks something with the left foot</span>.",
        "6: A man <span style='color:#06C755'>lifts heavy object </span> and <span style='color:#DF1817'> places it on a surface</span>.",
        "7: A person <span style='color:#06C755'>runs on the spot</span>.",
    ]);

    // Third row captions
    attachTimedCaption('long-horizon-rotating-caption-3', [
        "1: The person <span style='color:#06C755'>calmly steps back</span>.",
        "2: The person <span style='color:#06C755'>is has both hands on his legs</span>.",
        "3: The person <span style='color:#06C755'>walks happily dancing</span>.",
        "4: The person <span style='color:#06C755'>waves his left hands</span>.",
        "5: The person <span style='color:#06C755'>puts both hands behind his back</span>.",
        "6: The person <span style='color:#06C755'>is jumping with a rope</span>.",
        "7: The person <span style='color:#06C755'>is impatiently running out into the open</span>.",
    ]);

    // Fourth row captions
    attachTimedCaption('long-horizon-rotating-caption-4', [
        "1: The person <span style='color:#06C755'>walks around while looking at a phone</span>.",
        "2: A person <span style='color:#06C755'>stretches both arms upward</span>.",
        "3: The man <span style='color:#06C755'>looks around curiously</span>.",
        "4: A person <span style='color:#06C755'>steps sideways carefully</span>.",
        "5: A person <span style='color:#06C755'>claps their hands</span>.",
        "6: A person <span style='color:#06C755'>balances on one leg for a few seconds</span>.",
        "7: A person <span style='color:#06C755'>waves both hands in excitement</span>.",
    ]);

    // Fifth row captions
    attachTimedCaption('long-horizon-rotating-caption-5', [
        "1: A person <span style='color:#06C755'>stretches their right leg forward</span>.",
        "2: A person <span style='color:#06C755'>is walking on a treadmill</span>.",
        "3: A person waves to someone on the left.",
        "4: A person <span style='color:#06C755'>sits down and crosses their legs</span>.",
        "5: A person <span style='color:#06C755'>raises one hand to ask a question</span>.",
        "6: A man <span style='color:#06C755'>performs a few squats</span>.",
        "7: A person <span style='color:#06C755'>slowly walks backward</span>.",
    ]);
})
