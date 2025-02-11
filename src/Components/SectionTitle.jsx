

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-4">
           <p className="font-bold uppercase text-4xl mb-4">{heading}</p> 
           <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;