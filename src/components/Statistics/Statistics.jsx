import css from './Statistics.module.css'

import { StatLIST } from "components/Stat-list/Stat-list"
import { StatTITLE } from "components/Stat-title/Stat-title"



export const Statistics = ({title, stats}) => {
    return (
        <>
        <section className={css.statistics}>
        <StatTITLE title={title} stats={stats}  />
        
        <ul className="stat-list">
            <StatLIST stats={stats} />
        </ul>
        </section>
        </>
    )
}

