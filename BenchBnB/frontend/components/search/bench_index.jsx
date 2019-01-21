import React from 'react';
import BenchIndexItem from './bench_index_item';
class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {    
    if (this.props) {
      const { benches } = this.props;
      return (
        <div>
          <ul>
            {
              Object.values(benches).map(bench => (
                <BenchIndexItem
                  key={`Bench: ${bench.id}`}
                  bench={bench} />
              )
              )
            }
          </ul>
        </div>
      )
    } else {
      return null;
    }
  
  }
};

export default BenchIndex;