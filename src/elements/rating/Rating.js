const Rating = ({ value, setValue }) => {
  function handleStarClick(index) {
    setValue(index + 1);
  }

  function handleMouseOver(index) {
    const stars = document.querySelectorAll(".star");
    for (let j = 0; j < stars.length; j++) {
      if (j <= index) {
        stars[j].classList.add("filled");
      } else {
        stars[j].classList.remove("filled");
      }
    }
  }

  function handleMouseOut() {
    updateStars();
  }

  function updateStars() {
    const stars = document.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
      if (i < value) {
        stars[i].classList.add("filled");
      } else {
        stars[i].classList.remove("filled");
      }
    }
  }

  return (
    <div className="rating-container">
      <input type="hidden" name="rating" value={value} />
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          className="star"
          data-rating={index + 1}
          onClick={() => handleStarClick(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 566.67 566.67"
          >
            <path
              className="cls-1"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="33.33px"
              d="M371.67,181.09L299.51,26.97c-6.43-13.73-25.92-13.73-32.35,0l-72.16,154.12L31.85,206.08c-14.37,2.2-20.24,19.78-10.09,30.21l118.64,121.91-27.82,170.96c-2.4,14.76,13.22,25.79,26.28,18.56l144.47-80.06,144.47,80.06c13.05,7.23,28.68-3.8,26.28-18.56l-27.82-170.96,118.64-121.91c10.15-10.43,4.28-28.01-10.09-30.21l-163.15-24.99Z"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default Rating;
