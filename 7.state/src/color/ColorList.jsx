import Color from "./Color";

const ColorList = ({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) => {
    if (!colors.length) return (
        <div>
            NO COLORS LISTED 🙆🏻‍♂️
        </div>
    )
    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)
            }
        </div>
    )
}

export default ColorList;