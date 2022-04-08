import './list-item.scss'
type ListItemProps = {
  title: string;
  paymentType: string;
  date: string;
  value: string;
}
function ListItem( { title, paymentType, date, value }: ListItemProps ) 
{

  return (
    <div className="item">
      <div>
        <p id="title">{title}</p>
        <p id="paymentType">{paymentType}</p>
        <p id="date">{date}</p>
      </div>
      <p id="value">{value}</p>
    </div>
  )
}

export default ListItem