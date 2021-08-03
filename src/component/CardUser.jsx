import React, {useState} from "react";
import PropTypes from "prop-types";

function CardUser({removeFavorites, addToFavorites, details, deleteUser, isFavorite, index}) {
    const [willFavorite, setFavorite] = useState(isFavorite);
    return (
        <div className="card " style={{width: "18rem"}} key={details.key}>
            <img
                className="card-img-top"
                src={details.photo === "null" ? 'https://hsto.org/webt/-j/go/fx/-jgofxkmtexlfds_uh_c4eklqgu.jpeg' : details.photo}
                style={{width: "16,5rem", height: "13rem"}}
                alt=""
            />
            <div className="card-body">
                <h6 className="card-title">{index}</h6>
                <h6 className="card-title">
                    {details.email}
                </h6>
                <h6 className="card-title">
                    {details.type}
                </h6>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between ">
                    <button
                        type="button"
                        className={willFavorite ? "btn btn-success" : "btn btn-secondary"}
                        onClick={() => {
                            setFavorite(
                                !willFavorite
                            )
                            {
                                willFavorite ? removeFavorites(details.key) : addToFavorites(details.key)
                            }
                        }}
                    >
                        Liked
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={deleteUser}
                    >Delete User
                    </button>
                </div>
            </div>

        </div>
    )
}

CardUser.propTypes = {
    removeFavorites: PropTypes.func,
    addToFavorites: PropTypes.func,
    deleteUser: PropTypes.func,
    details: PropTypes.shape({
        type: PropTypes.string,
        photo: PropTypes.string,
        email: PropTypes.string,
    }),
    index: PropTypes.string,
}
export default CardUser


