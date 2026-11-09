// Shows a TMDB score (0-10) with a colour that matches how good it is.
function Rating({ score }) {
  if (!score) {
    return <span className="rating rating-none">No rating</span>;
  }

  let level = "rating-low";
  if (score >= 7) level = "rating-high";
  else if (score >= 5) level = "rating-mid";

  return <span className={`rating ${level}`}>★ {score.toFixed(1)}</span>;
}

export default Rating;
