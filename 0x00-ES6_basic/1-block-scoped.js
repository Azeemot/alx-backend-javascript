export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;    // Update the value of 'task' variable to 'true'
    task2 = false;  // Update the value of 'task2' variable to 'false'
  }

  return [task, task2];
}
