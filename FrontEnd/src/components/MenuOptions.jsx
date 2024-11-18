import { Dashboard } from "./svg/menu-option-svg"

export function MenuOptions() {
    return (
        <div className="menu-option flex-c-vert">
            <Dashboard size='35px' color='white' />
            <label>Dashboard</label>
        </div>
    )
}