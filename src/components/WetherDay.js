export const WetherDay = ({ max, wetherType, wetherKey, dayOfWeek}) => {
    return (
        <div style={{ background: 'grey', margin: '5px', borderRadius: '5px', padding: '6px'}} >
            <p>{dayOfWeek}</p>
            <img alt={wetherType} src={`https://developer.accuweather.com/sites/default/files/${wetherKey}-s.png`} />
            <div>{max}C</div>
        </div>
    )
}