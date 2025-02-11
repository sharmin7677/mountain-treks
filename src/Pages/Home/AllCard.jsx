
/* eslint-disable react/prop-types */
const AllCard = ({ adventure }) => { 
  if (!adventure) {
    return <p>No adventure data found.</p>;
  }

  const {
    title,
    image,
    short_description,
    max_group_size,
    included_items,
    eco_friendly_features,
    cost,
    adventure_level,
    booking_availability,
    duration,
    location,
  } = adventure;



  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-[380px] w-[330px]" src={image} alt={title || "Adventure"} /> 
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          
        </h2>
        <p>{short_description}</p>

        <div>
          <p className="font-semibold">Eco Friendly Features: </p>
          <ul className="list-disc pl-4">
            {eco_friendly_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p className="font-semibold">Include Items:</p>
          <ul className="list-disc pl-4">
            {included_items?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="badge badge-secondary">Cost: ${cost}</div>
        <div>
          <p className="font-semibold">Booking Availability: {booking_availability}</p>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">Adventure Level: {adventure_level}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="badge badge-outline badge-info">Max Group Size: {max_group_size}</div>
          <div className="badge badge-outline badge-info">Duration: {duration}</div>
        </div>

        
      </div>
    </div>
  );
};

export default AllCard;
