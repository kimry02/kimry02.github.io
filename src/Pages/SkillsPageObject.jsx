export default function SkillsPageObject(props) {
    return(
        <div className="text-sky-900 grow text-center m-0.5 my-2 max-w-fit bg-slate-300 shadow rounded">
            <div className="p-1 px-1.5">
                {props.name}
            </div>
        </div>
    )
}