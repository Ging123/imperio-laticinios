export default function validateCirclesThatMustBeEnable(currentLevel:0|1|2) {
  if(currentLevel === 0) return [false, true, true];
  if(currentLevel === 1) return [false, false, true];
  return [false, false, false];
}