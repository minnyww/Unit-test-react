import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";
test("should increment in useCounter is function", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
});

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter(5));
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(6);
});

test("should reset counter to updated initial value", () => {
  let initialValue = 0;
  let expectedResult = 10;
  const { result, rerender } = renderHook(() => useCounter(initialValue));
  initialValue = 10;
  // re render hooks
  rerender();
  act(() => {
    result.current.reset();
  });
  expect(result.current.count).toBe(expectedResult);
});

test("2 : should reset counter to updated initial value", () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    {
      initialProps: { initialValue: 0 },
    },
  );
  rerender({ initialValue: 10 });
  act(() => {
    result.current.reset();
  });
  expect(result.current.count).toBe(10);
});
