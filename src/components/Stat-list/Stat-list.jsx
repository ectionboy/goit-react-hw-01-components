export const StatLIST = ({stats}) =>{
    return(
        stats.map(stat => {
            return(
                <li key={stat.id} className="item">
                  <span className="label">{stat.label}</span>
                  <span className="percentage">{stat.percentage}%</span>
                </li>
            )
        })
    )
}