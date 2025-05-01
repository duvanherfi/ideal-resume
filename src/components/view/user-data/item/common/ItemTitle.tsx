interface ItemTitleProps {
  children: string;
}

const ItemTitle = (props: ItemTitleProps) => {
  const { children } = props;
  return (
    <h4 className="font-medium text-secondary-900 dark:text-secondary-100 truncate">
      {children}
    </h4>
  );
};

export default ItemTitle;