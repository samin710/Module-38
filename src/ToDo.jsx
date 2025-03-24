// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone) {
//     return (
//       <li>
//         Done: {task} Time: {time}
//       </li>
//     );
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

export default function ToDo({ task, isDone, time = 0 }) {
  return isDone ? (
    <li>
      Done: {task} Time: {time}
    </li>
  ) : (
    <li>Pending: {task} Time: {time}</li>
  );
}
