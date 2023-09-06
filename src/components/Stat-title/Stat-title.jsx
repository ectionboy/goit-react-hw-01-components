export const StatTITLE = ({title, stats}) => {
    return (
        <>
        {(title && stats) && (
            <h2 className="title">{title}</h2>
        )  }
</>
    )
}