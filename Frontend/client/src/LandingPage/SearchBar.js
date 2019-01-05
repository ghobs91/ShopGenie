import React, { Component } from 'react';
class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="product"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;