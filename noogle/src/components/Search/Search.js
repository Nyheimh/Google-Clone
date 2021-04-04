import { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search", input);

    //
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
{/* if hide button prop is passed use classes buttonHidden (display none)*/}
      {!hideButtons ? (
      <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
        
      ) : (
          // used a ternary to hide buttons initiated by buttonHidden
        <div className="search__buttons">
        <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
      </div>
      )}
    </form>
  );
}

export default Search;
