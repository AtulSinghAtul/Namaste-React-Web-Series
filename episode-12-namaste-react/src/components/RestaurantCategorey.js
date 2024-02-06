import AccordionItemsList from "./AccordionItems";

const RestaurantCategorey = (props) => {
  const { data, showItems, setShowIndex, key } = props;
  console.log(data);

  //! Lifting State Up using index and it's controlled component using props
  function handleClick() {
    setShowIndex(key);
  }

  return (
    <>
      {/* Header */}
      <div className=" bg-slate-100 py-3 mb-2 shadow-lg w-[700px] p-9 cursor-pointer">
        <div
          className="flex justify-between items-center mb-5"
          onClick={handleClick}
        >
          <span className="font-bold text-lg mx-3">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion Body */}
        {showItems && <AccordionItemsList items={data?.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategorey;
