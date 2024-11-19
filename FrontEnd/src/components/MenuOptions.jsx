import { Dashboard } from "./svg/menu-option-svg"

export function MenuOptions({setPage, changePage}) {
    return (
        <div className="menu-option flex-c-vert" onClick={(e) => changePage(e, setPage)}>
            <Dashboard size='35px' color='white' />
            <label>Dashboard</label>
        </div>
    )
}