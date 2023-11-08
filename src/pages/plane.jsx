import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slice/counter'
import Layout from '../layout/app'
export default function Plane() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return <Layout>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  </Layout>
}
