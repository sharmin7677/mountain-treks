import { useLoaderData } from "react-router-dom";

const AdventureDetails = () => {
  const adventure = useLoaderData();
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

  if (!adventure || Object.keys(adventure).length === 0) {
    return <p className="text-center text-red-500">Adventure not found</p>;
  }

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img className="h-[700px]" src={image} alt="loading" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">Cost: ${cost}</div>
        </h2>
        <p>{short_description}</p>

        <div>
          <div>
            <p className="font-semibold">Eco Friendly Features: </p>
            <ul className="list-disc pl-4">
              {eco_friendly_features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <p className="font-semibold">Include Items:</p>
          <ul className="list-disc pl-4">
            {included_items?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">
            Booking Availability: {booking_availability}
          </p>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">Adventure Level: {adventure_level}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline badge-info">
            Max Group Size: {max_group_size}
          </div>
          <div className="badge badge-outline badge-info">Duration: {duration}</div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
