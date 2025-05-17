import Avatar from "../../atom/avatar/Avatar";
import Label from "../../atom/label/Label";
import AcUnitTwoTone from "@mui/icons-material/AcUnitTwoTone";
import './Highlight.css'
function Highlight(props) {
  const styles = {
    width: "80px",
    height: "80px",
    borderRadius: "90%",
    backgroundColor: "blue",
  };

  return (
    <>
      <div class='atr'>
        <Avatar style={styles}>
          <AcUnitTwoTone></AcUnitTwoTone>
        </Avatar>
        <Label text={props.text}></Label>
      </div>
    </>
  );
}
export default Highlight;
 
