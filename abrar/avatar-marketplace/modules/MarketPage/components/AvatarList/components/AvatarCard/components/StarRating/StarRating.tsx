interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const starArr = [];
  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }
  if (rating < 5) {
    const partialStar = rating - fullStars;
    starArr.push(partialStar);
    const emptyStars = 5 - starArr.length;
    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }

  const stars = starArr.map((val, i) => {
    return (
      <div
        key={i}
        className="w-4 h-4 text-xs flex items-center justify-center bg-mutedText text-white rounded"
        style={{
          background: `linear-gradient(90deg, #F9AE3F 
    ${val * 100}%, #bbbac0 ${val * 100}%)`,
        }}
      >
        ★
      </div>
    );
  });
  
  return <div className="flex gap-0.5">{stars}</div>
};

export default StarRating;
