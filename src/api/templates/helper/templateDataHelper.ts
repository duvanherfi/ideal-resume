type ItemTime = { startDate?: string, endDate?: string };

export const getTimeRange = (item: ItemTime, label: { present?: string }, separator: string = "-") => {
    return `${item.startDate} ${separator} ${item.endDate ?? label.present}`;
};