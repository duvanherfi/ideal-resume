interface ItemDescriptionProps {
  children: string;
}

const ItemDescription = (props: ItemDescriptionProps) => {
  const { children } = props;
  return (
    <p className="text-xs md:text-sm mt-1 text-secondary-500 dark:text-secondary-400 break-words">
      {children}
    </p>
  );
};

export default ItemDescription;