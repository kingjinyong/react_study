import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../store/userSlice";
import { increaseCount } from "../store/cartSlice";

function Cart() {
  // let state = useSelector((state) => {
  //   return state;
  // });

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name}({state.user.age}살)의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        나이 증가 버튼
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td>
                <button
                  onClick={() => {
                    console.log(a.id);
                    dispatch(increaseCount(a.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
