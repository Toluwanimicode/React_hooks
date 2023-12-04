const MovieCard = ({ imgUrl, title, year, rating, link }) => {
    const style = {
      card: {
        width: "200px",
        height: "300px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        margin: "10px",
        padding: "10px",
      },

      img: {
        width: "100%",
        height: "60%",
        objectFit: "cover",
        
      },
      title: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: "0",
        color: "white"
     
        },
        text: {
            display: "flex",
            justifyContent: "space-between",
              padding: "0 25px",
              color: "white"
      }
    };
    return (
      <div className="image-container" style={style.card}>
        <img style={style.img} src={imgUrl} alt="" />
        <h3 style={style.title}>{title}</h3>
        <div style={style.text}>
          <p>{year}</p>
          <p>{rating}</p>
        </div>

        <div className="view">
          <a href={link}>View Now</a>
        </div>
        
      </div>
    );
  };
  
  export default MovieCard;