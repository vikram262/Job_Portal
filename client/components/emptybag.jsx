import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Emptybag() {
    const navigate = useNavigate();
    function setmodule() {
        navigate("/shop");
    }
    return <>
        <div class="super-coin-cont">
            <div class="remove-super-coin" onClick={setmodule}><RxCross1 /></div>
            <div class="super-coin-sub">please add items to the cart </div>
        </div>
    </>
}
export default Emptybag;