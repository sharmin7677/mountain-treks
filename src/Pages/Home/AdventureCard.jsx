/* eslint-disable react/prop-types */
const AdventureCard = ({ adventure }) => {
  const { title, image, eco_friendly_features } = adventure;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-[220px] w-[330px]" src={image} alt="loading" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {/* Display eco-friendly features */}
        <div className="text-sm text-gray-500">
          <h3 className="font-semibold">Eco-Friendly Features:</h3>
          <ul className="list-disc pl-4">
            {eco_friendly_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AdventureCard;
