const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper i ");
    const slideScrollbar = document.querySelector(".container-slide .slider-scrol");
    const scrollbarThumb = slideScrollbar.querySelector(".scrolbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle Scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (a) => {
        const starX =   a.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        // update thumb posisi on mouse move
        const handleMouseMove = (a) => {
            const deltaX = a.clientX - starX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = slideScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft ;
 
            scrollbarThumb.style.left = `${newThumbPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listener on mouse Up
        const handleMouseUp = () =>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });


    // slide images acroding to the slide butoon clicks
    slideButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () =>{
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () =>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () =>{
        handleSlideButtons();
        updateScrollThumbPosition()
    });
}




window.addEventListener("load", initSlider);